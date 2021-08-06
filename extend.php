<?php

/*
 * This file is part of davwheat/ads.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\Ads;

use Flarum\Extend;
use Davwheat\Ads\Extend\ExtensionSettings;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new ExtensionSettings())
      ->addKey('davwheat-ads.enabled-ad-locations')
      ->addKey('davwheat-ads.ad-code.header')
      ->addKey('davwheat-ads.ad-code.discussion_sidebar')
      ->addKey('davwheat-ads.ad-code.between_posts')
      ->addKey('davwheat-ads.ad-code.footer')
];
