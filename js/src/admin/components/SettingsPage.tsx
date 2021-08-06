import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

import Button from 'flarum/common/components/Button';
import Switch from 'flarum/common/components/Switch';
import classList from 'flarum/common/utils/classList';

import saveSettings from 'flarum/admin/utils/saveSettings';
import extractText from 'flarum/common/utils/extractText';
import { AdUnitLocations, AllAdUnitLocations } from '../../common/AdUnitLocations';

const translate = (key: string, data?: Record<string, unknown>): string[] => app.translator.trans(`davwheat.ads.admin.settings.${key}`, data);

interface ISettingsPageState {
  enabledLocations: AdUnitLocations[];
  code: Record<AdUnitLocations, string>;
  pubId: string;

  isDirty: boolean;
  loading: boolean;
}

export default class SettingsPage extends ExtensionPage {
  state: ISettingsPageState = {
    enabledLocations: [],
    code: {
      header: '',
      footer: '',
      discussion_sidebar: '',
      between_posts: '',
    },
    pubId: '',
    isDirty: false,
    loading: false,
  };

  // Don't use super's loading property
  loading: undefined;

  oninit(vnode) {
    super.oninit(vnode);

    this.state.enabledLocations = JSON.parse(app.data.settings['davwheat-ads.enabled-ad-locations']);

    Object.keys(this.state.code).forEach((key) => {
      this.state.code[key as AdUnitLocations] = app.data.settings[`davwheat-ads.ad-code.${key}`];
    });

    this.state.pubId = app.data.settings['davwheat-ads.ca-pub-id'];
  }

  content() {
    return (
      <div class="content">
        <fieldset class="Form-group">
          <label>
            AdSense Publisher ID
            <input
              class="FormControl"
              placeholder="ca-pub-XXXXXXXXXX"
              type="text"
              value={this.state.pubId}
              oninput={(e: InputEvent) => {
                this.state.isDirty = true;

                this.state.pubId = (e.currentTarget as HTMLInputElement).value;
              }}
            />
          </label>
        </fieldset>

        <fieldset class="Form-group">
          <legend>{translate('enabled_locations')}</legend>

          {AllAdUnitLocations.map((location) => (
            <Switch
              key={location}
              state={this.isLocationEnabled(location)}
              onchange={(val: boolean) => {
                const s = new Set(this.state.enabledLocations);

                if (val) {
                  s.add(location);
                } else {
                  s.delete(location);
                }

                this.state.enabledLocations = Array.from(s);

                this.state.isDirty = true;
              }}
              disabled={this.state.loading}
            >
              {app.translator.trans(`davwheat.ads.lib.locations.${location}`)}
            </Switch>
          ))}
        </fieldset>

        <aside class="davwheat-ads-notice">{translate('warning')}</aside>

        <fieldset class="Form-group">
          {AllAdUnitLocations.map((location) => (
            <label>
              {translate('code_input', { for: app.translator.trans(`davwheat.ads.lib.locations.${location}`) })}
              <textarea
                disabled={this.state.loading || !this.isLocationEnabled(location)}
                class="FormControl"
                value={!this.isLocationEnabled(location) ? translate('code_input_disabled') : this.state.code[location]}
                oninput={(e: InputEvent) => {
                  this.state.isDirty = true;

                  const val = (e.currentTarget as HTMLInputElement).value;

                  this.state.code[location] = val;
                }}
              />
            </label>
          ))}
        </fieldset>

        <Button onclick={this.saveSettings.bind(this)} class="Button Button--primary" disabled={!this.state.isDirty} loading={this.state.loading}>
          {this.getButtonText()}
        </Button>
      </div>
    );
  }

  private isLocationEnabled(location: AdUnitLocations): boolean {
    return this.state.enabledLocations.includes(location);
  }

  private getButtonText(): string {
    if (this.state.loading) return extractText(translate('save_btn.saving'));
    if (this.state.isDirty) return extractText(translate('save_btn.dirty'));

    return extractText(translate('save_btn.saved'));
  }

  makeDirty() {
    this.state.isDirty = true;
  }

  saveSettings(e: Event) {
    e.preventDefault();

    app.alerts.clear();
    this.state.loading = true;

    return saveSettings({
      'davwheat-ads.enabled-ad-locations': JSON.stringify(this.state.enabledLocations),
      'davwheat-ads.ca-pub-id': this.state.pubId,

      ...Object.keys(this.state.code).reduce((prev, curr) => {
        return { ...prev, [`davwheat-ads.ad-code.${curr}`]: this.state.code[curr as AdUnitLocations] };
      }, {}),
    }).then(this.onSettingsSaved.bind(this));
  }

  onSettingsSaved(): void {
    this.state.loading = false;
    this.state.isDirty = false;

    app.alerts.show({ type: 'success' }, app.translator.trans('core.admin.settings.saved_message'));
  }
}