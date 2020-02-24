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
 * @license    The MIT License
 * @link       https://github.com/littlegolden/flarum-uitab
 */

namespace itnt\uiTab;

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->foot[] = '
            <!-- UI Tab -->
            <div class="mobile-app-icon-bar" id="myDIV">
            		<a href="/">
			    	<button class="buttonstyle">
			    		<i class="fa fa-home"></i>
					<span class="spanstyle"></span>
				</button></a>
				<a href="/tags">
			    	<button class="buttonstyle">
			    		<i class="fas fa-tags"></i>
				    	<span class="spanstyle"></span>
				</button></a>
				<a href="/composer">
			    	<button class="buttonstyle">
			    		<i class="fas fa-edit"></i>
				    	<span class="spanstyle"></span>
				</button></a>
				<a href="/setting">
			    	<button class="buttonstyle">
			    		<i class="fas fa-user-cog"></i>
				    	<span class="spanstyle"></span>
				</button></a>
				<a href="/notifications">
			    	<button class="buttonstyle">
			    		<i class="fas fa-bell"></i>
				    	<span class="spanstyle"></span>
				</button></a>
		    </div>
            ';
        })
];