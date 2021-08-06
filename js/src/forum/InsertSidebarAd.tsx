import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import type ItemList from 'flarum/common/utils/ItemList';

export default function InsertSidebarAd() {
  const AdCode = app.data['davwheat-ads.ad-code.sidebar'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  extend(IndexPage.prototype, 'sidebarItems', function (this: IndexPage, items: ItemList) {
    items.add('davwheat-ads', <div class="davwheat-ad davwheat-ad-sidebar">{Html}</div>, -1000);

    return items;
  });

  extend(IndexPage.prototype, ['oncreate', 'onupdate'], function (this: IndexPage, returned: any) {
    RefreshAds();

    return returned;
  });
}
