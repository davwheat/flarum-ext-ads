<?php

/**
 * Copyright (c) 2022 David Wheatley
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\Ads;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributes
{

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer, $forum, array $attributes)
    {
        $actor = $serializer->getActor();

        $attributes['canBypassAds'] = $actor->can('davwheat-ads.bypass-ads');

        return $attributes;
    }
}
