import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import type ItemList from 'flarum/common/utils/ItemList';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

export default function InsertDiscussionSidebarAd() {
  const root = document.querySelector(':root') as HTMLHtmlElement;

  const AdCode = app.data['davwheat-ads.ad-code.discussion_sidebar'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  (document.querySelector(':root') as HTMLHtmlElement).style.setProperty('--davwheat-ads--discussion-sidebar-position', '36px');

  extend(DiscussionPage.prototype, 'sidebarItems', function (this: IndexPage, items: ItemList) {
    // Only show sidebar ad on desktop and tablet
    if (['desktop-hd', 'desktop', 'tablet'].includes(getComputedStyle(root).getPropertyValue('--flarum-screen'))) {
      items.add('davwheat-ads', <div class="davwheat-ad davwheat-ad-discussion-sidebar">{Html}</div>, 1000);
    }

    return items;
  });

  extend(DiscussionPage.prototype, ['oncreate', 'onupdate'], function (this: IndexPage, returned: any) {
    RefreshAds();

    return returned;
  });
}
