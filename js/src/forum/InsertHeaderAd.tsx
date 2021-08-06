import app from 'flarum/forum/app';

import { extend, override } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';

export default function InsertHeaderAd() {
  const AdCode = app.data['davwheat-ads.ad-code.header'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  override(IndexPage.prototype, 'hero', function (originalHero: () => Mithril.Children): Mithril.Children {
    return [originalHero(), <div class="davwheat-ad davwheat-ad-header">{Html}</div>];
  });

  extend(IndexPage.prototype, ['oncreate', 'onupdate'], function (this: IndexPage, returned: any) {
    RefreshAds();

    return returned;
  });
}
