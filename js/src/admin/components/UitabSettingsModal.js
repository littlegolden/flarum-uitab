import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

// just make things easier
const localePrefix = 'itnt-uitab.admin.settings.';

export default class UitabSettingsModal extends SettingsModal {
  className() {
    return 'UitabSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans(localePrefix + 'title');
  }

  form() {
    return [
      <div className="Form-group">
        <h3>{app.translator.trans(localePrefix + 'tags_title')}</h3>
        <div className="helptext">{app.translator.trans(localePrefix + 'help_text')}</div>
        <label>{app.translator.trans(localePrefix + 'home_page_label')}</label>
        <input required className="FormControl" type="text" placeholder="/" bidi={this.setting('itnt-uitab.home_page','\/')}/>
        <label>{app.translator.trans(localePrefix + 'tags_page_label')}</label>
        <input required className="FormControl" type="text" placeholder="/tags" bidi={this.setting('itnt-uitab.tags_page','\/tags')}/>
        <label>{app.translator.trans(localePrefix + 'create_page_label')}</label>
        <input required className="FormControl" type="text" placeholder="/composer" bidi={this.setting('itnt-uitab.create_page','\/composer')}/>
        <label>{app.translator.trans(localePrefix + 'settings_page_label')}</label>
        <input required className="FormControl" type="text" placeholder="/settings" bidi={this.setting('itnt-uitab.settings_page','\/settings')}/>
        <label>{app.translator.trans(localePrefix + 'notifications_page_label')}</label>
        <input required className="FormControl" type="text" placeholder="/notifications" bidi={this.setting('itnt-uitab.notifications_page','\/notifications')}/>
      </div>
    ];
  }
}
