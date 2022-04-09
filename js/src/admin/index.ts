import app from 'flarum/admin/app';

import SettingsPage from './components/SettingsPage';

import type { CustomExtensionPage } from 'flarum/admin/utils/ExtensionData';

app.initializers.add('davwheat/ads', () => {
  app.extensionData
    .for('davwheat-ads')
    .registerPage(SettingsPage as unknown as CustomExtensionPage)
    .registerPermission(
      {
        icon: 'fas fa-shield-alt',
        permission: 'davwheat-ads.bypass-ads',
        label: app.translator.trans('davwheat.ads.admin.permissions.bypassAds'),
        allowGuest: true,
      },
      'view'
    );
});
