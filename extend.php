<?php

/**
 * UI Tab Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    itnt/flarum-uitab
 * @author     Golden <littlegoldenjin@gmail.com>
 * @copyright  2020
 * @license    MIT
 * @link       https://github.com/littlegolden/flarum-uitab
 */

namespace ITNT\UITab;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use ITNT\UITab\Listeners\LoadSettingsFromDatabase;

return [
	(new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

	(new Extend\Frontend('forum'))
		->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),

	new Extend\Locales(__DIR__ . '/resources/locale'),

	(new Extend\Event)
	->subscribe(Listeners\LoadSettingsFromDatabase::class),

	(new Extend\Settings())
        ->serializeToForum('home_page', 'itnt-uitab.home_page')
        ->serializeToForum('discussions_icon', 'itnt-uitab.discussions_icon')
        ->serializeToForum('tags_icon', 'itnt-uitab.tags_icon')
        ->serializeToForum('composer_icon', 'itnt-uitab.composer_icon')
        ->serializeToForum('settings_icon', 'itnt-uitab.settings_icon')
        ->serializeToForum('notifications_icon', 'itnt-uitab.notifications_icon')
];
