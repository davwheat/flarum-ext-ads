import app from 'flarum/forum/app';

import { extend, override } from 'flarum/common/extend';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import PostStream from 'flarum/forum/components/PostStream';

export default function InsertBetweenPostsAds() {
  const AdCode = app.data['davwheat-ads.ad-code.between_posts'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  override(PostStream.prototype, 'view', function (originalView: () => Mithril.Vnode<any, any>): Mithril.Children {
    const items = originalView().children as Mithril.Children[];

    const newItems = items.reduce((itemList, currentItem, i) => {
      const items = [...itemList, currentItem];

      if (i % (parseInt(app.data['davwheat-ads.between-n-posts']) || 15) === 0) {
        items.push(
          <div key={`davwheat-ad-${i}`} class="davwheat-ad davwheat-ad-between-posts">
            {Html}
          </div>
        );
      }

      return items;
    }, [] as any[]);

    return <div className="PostStream">{newItems}</div>;
  });

  extend(PostStream.prototype, ['onupdate', 'oncreate'], (originalReturnVal: any) => {
    RefreshAds();

    return originalReturnVal;
  });
}
