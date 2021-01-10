import app from 'flarum/app';

const localePrefix = "itnt-uitab.admin.settings.";

app.initializers.add('itnt-uitab', () => {
    app.extensionData.for('itnt-uitab')
        .for('itnt-uitab')
        .registerSetting(function () {
            return (
                <div className="helpText"><i class="icon Button-icon fas fa-exclamation-circle"></i>{app.translator.trans(localePrefix + 'help_text')}</div>
            );
        })
        .registerSetting({
            label: app.translator.trans(localePrefix + "home_page_label"),
            setting: 'itnt-uitab.home_page',
            type: 'text',
        })
});