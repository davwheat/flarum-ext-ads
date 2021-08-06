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
use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;

return [
  (new Extend\Frontend('forum'))
    ->js(__DIR__ . '/js/dist/forum.js')
    ->css(__DIR__ . '/less/forum.less')
    ->content(function (Document $document) {
      /**
       * @var SettingsRepositoryInterface
       */
      $settings = resolve(SettingsRepositoryInterface::class);
      $caPubId = $settings->get('davwheat-ads.ca-pub-id', '');

      if ($caPubId !== '') {
        $url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=$caPubId";

        $document->head[] = "<script async src=\"$url\" crossorigin=\"anonymous\"></script>";
      }
    }),

  (new Extend\Frontend('admin'))
    ->js(__DIR__ . '/js/dist/admin.js')
    ->css(__DIR__ . '/less/admin.less'),

  new Extend\Locales(__DIR__ . '/locale'),

  (new ExtensionSettings())
    ->addKey('davwheat-ads.enabled-ad-locations')
    ->addKey('davwheat-ads.between-n-posts')
    ->addKey('davwheat-ads.enable-ad-after-placeholder')
    ->addKey('davwheat-ads.ad-code.header')
    ->addKey('davwheat-ads.ad-code.sidebar')
    ->addKey('davwheat-ads.ad-code.between_posts')
    ->addKey('davwheat-ads.ad-code.footer')
    ->addKey('davwheat-ads.ad-code.discussion_header')
];
