import app from 'flarum/admin/app';

import SettingsPage from './components/SettingsPage';

app.initializers.add('davwheat/ads', () => {
  app.extensionData.for('davwheat-ads').registerPage(SettingsPage);
});
