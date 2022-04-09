import app from 'flarum/forum/app';

import { extend, override } from 'flarum/common/extend';

import RefreshAds from './RefreshAds';
import PostStream from 'flarum/forum/components/PostStream';
import safelyEvalAdScript from './safelyEvalAdScript';
import areAdsBypassed from './areAdsBypassed';

import type Mithril from 'mithril';

export default function InsertBetweenPostsAds() {
  const AdCode = app.data['davwheat-ads.ad-code.between_posts'] as string;
  const Script = app.data['davwheat-ads.ad-code.between_posts.js'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  override(PostStream.prototype, 'view', function (originalView: () => Mithril.Vnode<any, any>): Mithril.Children {
    if (areAdsBypassed()) return originalView();

    const items = originalView().children as Mithril.Children[];

    const newItems = items.reduce((itemList, currentItem, i) => {
      const curr = [...itemList, currentItem];

      if (i + 1 < items.length && i % (parseInt(app.data['davwheat-ads.between-n-posts'] as string) || 15) === 0) {
        curr.push(
          <aside key={`davwheat-ad-${i}`} class="PostStream-item">
            <div class="davwheat-ad davwheat-ad-between-posts">{Html}</div>
          </aside>
        );
      }

      return curr;
    }, [] as any[]);

    if (app.data['davwheat-ads.enable-ad-after-placeholder'] === '1') {
      newItems.push(
        <aside key={`davwheat-ad-after-placeholder`} class="PostStream-item">
          <div class="davwheat-ad davwheat-ad-between-posts davwheat-ad-between-posts--after-placeholder">{Html}</div>
        </aside>
      );
    }

    return <div className="PostStream">{newItems}</div>;
  });

  extend(PostStream.prototype, ['onupdate', 'oncreate'], (originalReturnVal: any) => {
    if (areAdsBypassed()) return;

    RefreshAds();
    safelyEvalAdScript('between posts', Script);
  });
}
