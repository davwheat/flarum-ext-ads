import app from 'flarum/forum/app';

import { extend, override } from 'flarum/common/extend';

import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import DiscussionListPane from 'flarum/forum/components/DiscussionListPane';
import PostStream from 'flarum/forum/components/PostStream';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

import listItems from 'flarum/common/helpers/listItems';

import type * as Mithril from 'mithril';
import RefreshAds from './RefreshAds';
import safelyEvalAdScript from './safelyEvalAdScript';
import areAdsBypassed from './areAdsBypassed';

export default function InsertDiscussionPageHeaderAd() {
  const AdCode = app.data['davwheat-ads.ad-code.discussion_header'] as string;
  const Script = app.data['davwheat-ads.ad-code.discussion_header.js'] as string;

  const Html = m.trust(AdCode) as ReturnType<Mithril.Static['trust']>;

  override(DiscussionPage.prototype, 'view', function (this: DiscussionPage, originalFunc: () => Mithril.Children): Mithril.Children {
    if (areAdsBypassed()) return originalFunc();

    const discussion = this.discussion;

    return (
      <div className="DiscussionPage">
        <DiscussionListPane state={app.discussions} />
        <div className="DiscussionPage-discussion">
          {discussion ? (
            [
              DiscussionHero.component({ discussion }),
              <div className="container">
                <nav className="DiscussionPage-nav">
                  <ul>{listItems(this.sidebarItems().toArray())}</ul>
                </nav>
                <div className="DiscussionPage-stream">
                  <div class="davwheat-ad davwheat-ad-discussion-header" align="center">
                    {Html}
                  </div>

                  {PostStream.component({
                    discussion,
                    stream: this.stream,
                    onPositionChange: this.positionChanged.bind(this),
                  })}
                </div>
              </div>,
            ]
          ) : (
            <LoadingIndicator />
          )}
        </div>
      </div>
    );
  });

  extend(DiscussionPage.prototype, ['oncreate', 'onupdate'], function (this: DiscussionHero, returned: any) {
    if (areAdsBypassed()) return;

    RefreshAds();
    safelyEvalAdScript('discussion page header', Script);
  });
}
