import app from 'flarum/forum/app';

import { override } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';

import type * as Mithril from 'mithril';

export default function InsertHeaderAd() {
  const AdCode = app.data['davwheat-ads.ad-code.header'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  override(IndexPage.prototype, 'hero', (originalHero: () => Mithril.Children): Mithril.Children => {
    return [<div class="davwheat-ad davwheat-ad-header">{Html}</div>, originalHero()];
  });
}
