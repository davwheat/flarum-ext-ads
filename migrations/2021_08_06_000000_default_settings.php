<?php

/*
 * This file is part of davwheat/ads.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addSettings([
    'davwheat-ads.enabled-ad-locations' => '[]',
    'davwheat-ads.ad-code.header' => '',
    'davwheat-ads.ad-code.discussion_sidebar' => '',
    'davwheat-ads.ad-code.between_posts' => '',
    'davwheat-ads.ad-code.footer' => '',
]);
