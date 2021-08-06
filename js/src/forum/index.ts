import app from 'flarum/forum/app';
import type { AdUnitLocations } from 'src/common/AdUnitLocations';
import InsertBetweenPostsAds from './InsertBetweenPostsAds';

import InsertDiscussionPageHeaderAd from './InsertDiscussionPageHeaderAd';
import InsertFooterAd from './InsertFooterAd';
import InsertHeaderAd from './InsertHeaderAd';

app.initializers.add('davwheat/ads', () => {
  const enabledSlots: AdUnitLocations[] = JSON.parse(app.data['davwheat-ads.enabled-ad-locations']);

  if (enabledSlots.includes('header')) {
    InsertHeaderAd();
  }

  if (enabledSlots.includes('discussion_header')) {
    InsertDiscussionPageHeaderAd();
  }

  if (enabledSlots.includes('footer')) {
    InsertFooterAd();
  }

  if (enabledSlots.includes('between_posts')) {
    InsertBetweenPostsAds();
  }
});
