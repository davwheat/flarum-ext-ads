import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import type ItemList from 'flarum/common/utils/ItemList';
import safelyEvalAdScript from './safelyEvalAdScript';
import areAdsBypassed from './areAdsBypassed';

export default function InsertSidebarAd() {
  const root = document.querySelector(':root') as HTMLHtmlElement;

  const AdCode = app.data['davwheat-ads.ad-code.sidebar'] as string;
  const Script = app.data['davwheat-ads.ad-code.sidebar.js'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  extend(IndexPage.prototype, 'sidebarItems', function (this: IndexPage, items: ItemList<Mithril.Children>) {
    if (areAdsBypassed() || app.current.get('routeName') === 'tags') return;

    // Only show sidebar ad on desktop and tablet
    if (['desktop-hd', 'desktop', 'tablet'].includes(getComputedStyle(root).getPropertyValue('--flarum-screen'))) {
      items.add('davwheat-ads', <div class="davwheat-ad davwheat-ad-sidebar">{Html}</div>, -1000);
    }

    return items;
  });

  extend(IndexPage.prototype, ['oncreate', 'onupdate'], function (this: IndexPage, returned: any) {
    if (areAdsBypassed() || app.current.get('routeName') === 'tags') return;

    RefreshAds();
    safelyEvalAdScript('sidebar', Script);

    return returned;
  });
}
