<?php

namespace ITNT\UITab\Listeners;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;

class LoadSettingsFromDatabase
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings) {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events) {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    public function prepareApiAttributes(Serializing $event) {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['itnt-uitab.home_page'] = $this->settings->get('itnt-uitab.home_page');
            $event->attributes['itnt-uitab.tags_page'] = $this->settings->get('itnt-uitab.tags_page');
            $event->attributes['itnt-uitab.create_page'] = $this->settings->get('itnt-uitab.create_page');
            $event->attributes['itnt-uitab.settings_page'] = $this->settings->get('itnt-uitab.settings_page');
            $event->attributes['itnt-uitab.notifications_page'] = $this->settings->get('itnt-uitab.notifications_page');
        }
    }
}