import app from 'flarum/app';

import UitabSettingsModal from './components/UitabSettingsModal';

app.initializers.add('itnt-uitab', () => {
  app.extensionSettings['itnt-uitab'] = () => app.modal.show(new UitabSettingsModal());
});
