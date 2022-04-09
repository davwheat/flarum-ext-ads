<?php

/**
 * Copyright (c) 2022 David Wheatley
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\Ads;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Frontend\Document;
use Flarum\Frontend\Frontend;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Container\Container;
use Psr\Http\Message\ServerRequestInterface;

class ForumDocumentContent
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    function __invoke(Document $document, ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        if ($actor->can('davwheat-ads.bypass-ads')) {
            // Don't add ad code to the frontend page content
            return;
        }

        $caPubId = $this->settings->get('davwheat-ads.ca-pub-id', '');

        if ($caPubId !== '') {
            $url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=$caPubId";

            $document->head[] = "<script async src=\"$url\" crossorigin=\"anonymous\"></script>";
        }

        /**
         * @var array
         */
        $scripts = json_decode($this->settings->get('davwheat-ads.custom-ad-script-urls', '[]'), true);

        foreach ($scripts as $script) {
            $document->head[] = "<script async src=\"$script\"></script>";
        }
    }
}
