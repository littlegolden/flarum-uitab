import app from 'flarum/app';

const localePrefix = "itnt-uitab.admin.settings.";

app.initializers.add('itnt-uitab', () => {
    app.extensionData.for('itnt-uitab')
        .for('itnt-uitab')
        .registerSetting(function () {
            return (
                <div className="helpText">
                    <i className="icon Button-icon fas fa-exclamation-circle" />
                    {app.translator.trans(localePrefix + 'help_text')}
                </div>
            );
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "home_page_label"),
            setting: 'itnt-uitab.home_page',
            type: 'text',
        })
        .registerSetting(function () {
            return <hr />
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "discussions_icon_label"),
            help: app.translator.trans(localePrefix + "icon_help"),
            setting: 'itnt-uitab.discussions_icon',
            type: 'text',
            placeholder: 'fas fa-home'
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "tags_icon_label"),
            help: app.translator.trans(localePrefix + "icon_help"),
            setting: 'itnt-uitab.tags_icon',
            type: 'text',
            placeholder: 'fas fa-tags'
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "composer_icon_label"),
            help: app.translator.trans(localePrefix + "icon_help"),
            setting: 'itnt-uitab.composer_icon',
            type: 'text',
            placeholder: 'fas fa-edit'
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "settings_icon_label"),
            help: app.translator.trans(localePrefix + "icon_help"),
            setting: 'itnt-uitab.settings_icon',
            type: 'text',
            placeholder: 'fas fa-user-cog'
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "notifications_icon_label"),
            help: app.translator.trans(localePrefix + "icon_help"),
            setting: 'itnt-uitab.notifications_icon',
            type: 'text',
            placeholder: 'fas fa-bell'
        })
});
