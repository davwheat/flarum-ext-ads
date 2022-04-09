import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

import Button from 'flarum/common/components/Button';
import Switch from 'flarum/common/components/Switch';

import saveSettings from 'flarum/admin/utils/saveSettings';
import extractText from 'flarum/common/utils/extractText';
import { AdUnitLocations, AllAdUnitLocations } from '../../common/AdUnitLocations';

import type Mithril from 'mithril';

const translate = (key: string, data?: Record<string, unknown>): Mithril.Children => app.translator.trans(`davwheat.ads.admin.settings.${key}`, data);

export interface ISettingsPageState {
  script_urls: string[];

  enabledLocations: AdUnitLocations[];
  code: Record<AdUnitLocations | `${AdUnitLocations}.js`, string>;
  pubId: string;
  betweenNPosts: number;

  isDirty: boolean;
  loading: boolean;
  enableAdAfterPlaceholder: boolean;
}

export default class SettingsPage extends ExtensionPage {
  state: ISettingsPageState = {
    enabledLocations: [],
    script_urls: [],

    code: {
      header: '',
      footer: '',
      sidebar: '',
      between_posts: '',
      discussion_header: '',
      discussion_sidebar: '',
      'header.js': '',
      'footer.js': '',
      'sidebar.js': '',
      'between_posts.js': '',
      'discussion_header.js': '',
      'discussion_sidebar.js': '',
    },
    enableAdAfterPlaceholder: false,
    betweenNPosts: 0,
    pubId: '',
    isDirty: false,
    loading: false,
  };

  // Don't use super's loading property
  loading!: never;

  oninit(vnode) {
    super.oninit(vnode);

    this.state.enabledLocations = JSON.parse(app.data.settings['davwheat-ads.enabled-ad-locations'] || '[]');

    AllAdUnitLocations.forEach((location) => {
      this.state.code[location] = app.data.settings[`davwheat-ads.ad-code.${location}`] || '';
      this.state.code[`${location}.js`] = app.data.settings[`davwheat-ads.ad-code.${location}.js`] || '';
    });

    this.state.pubId = app.data.settings['davwheat-ads.ca-pub-id'] || '';
    this.state.betweenNPosts = parseInt(app.data.settings['davwheat-ads.between-n-posts']);
    this.state.enableAdAfterPlaceholder = app.data.settings['davwheat-ads.enable-ad-after-placeholder'] === '1';

    this.state.script_urls = JSON.parse(app.data.settings['davwheat-ads.custom_ad_script_urls'] || '[]');
  }

  content() {
    return (
      <div class="content">
        <p style="margin-top: 24px; font-weight: bold; color: red; margin-bottom: 32px;">{translate('admin_bypass_warning')}</p>

        <fieldset class="Form-group">
          <label>
            {translate('pub_id')}
            <input
              class="FormControl"
              placeholder="ca-pub-XXXXXXXXXX"
              type="text"
              value={this.state.pubId}
              disabled={this.state.loading}
              oninput={(e: InputEvent) => {
                this.state.isDirty = true;

                this.state.pubId = (e.currentTarget as HTMLInputElement).value;
              }}
            />
          </label>
        </fieldset>

        <fieldset class="Form-group">
          <label>{translate('script_urls')}</label>

          {this.state.script_urls.map((url, i) => (
            <input
              key={i}
              class="FormControl"
              placeholder="https://example.com/script.js"
              type="text"
              value={url}
              disabled={this.state.loading}
              oninput={(e: InputEvent) => {
                this.state.isDirty = true;

                this.state.script_urls[i] = (e.currentTarget as HTMLInputElement).value;
              }}
            />
          ))}

          <p>{translate('script_deletion')}</p>

          <Button
            class="Button"
            onclick={() => {
              this.state.script_urls.push('');
            }}
          >
            {translate('add_script')}
          </Button>
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

        <fieldset class="Form-group">
          <label>
            {translate('between_posts_gap')}
            <input
              class="FormControl"
              type="number"
              min="1"
              max="25"
              value={this.state.betweenNPosts}
              disabled={this.state.loading || !this.isLocationEnabled('between_posts')}
              oninput={(e: InputEvent) => {
                const val = parseInt((e.currentTarget as HTMLInputElement).value);

                this.state.isDirty = true;
                this.state.betweenNPosts = val;
              }}
            />
          </label>

          <Switch
            state={this.state.enableAdAfterPlaceholder}
            onchange={(val: boolean) => {
              this.state.isDirty = true;
              this.state.enableAdAfterPlaceholder = val;
            }}
            loading={this.state.loading}
            disabled={this.state.loading || !this.isLocationEnabled('between_posts')}
          >
            {translate('allow_after_placeholder')}
          </Switch>
        </fieldset>

        <aside class="davwheat-ads-notice">{translate('warning', { script: <code>&lt;script&gt;</code> })}</aside>

        <fieldset class="Form-group">
          {AllAdUnitLocations.map((location) => (
            <fieldset>
              <legend>{app.translator.trans(`davwheat.ads.lib.locations.${location}`)}</legend>

              <div class="davwheat-ads__code-boxes">
                <label>
                  {translate('code_input')}
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

                <label>
                  {translate('js_input')}
                  <textarea
                    disabled={this.state.loading || !this.isLocationEnabled(location)}
                    class="FormControl"
                    value={!this.isLocationEnabled(location) ? translate('js_input_disabled') : (this.state.code as any)[`${location}.js`]}
                    oninput={(e: InputEvent) => {
                      this.state.isDirty = true;

                      const val = (e.currentTarget as HTMLInputElement).value;

                      (this.state.code as any)[`${location}.js`] = val;
                    }}
                  />
                </label>
              </div>
            </fieldset>
          ))}
        </fieldset>

        <Button
          onclick={this.customSaveSettings.bind(this)}
          class="Button Button--primary"
          disabled={!this.state.isDirty}
          loading={this.state.loading}
        >
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

  async customSaveSettings(e: SubmitEvent) {
    e.preventDefault();

    app.alerts.clear();
    this.state.loading = true;

    const doesCodeHaveScriptTag = (Object.keys(this.state.code) as (keyof ISettingsPageState['code'])[]).some((key) => {
      const code = this.state.code[key];

      if (code.includes('<script')) {
        return true;
      }

      return false;
    });

    if (doesCodeHaveScriptTag && !(window as any).__davwheatAds_bypassScriptCheck) {
      app.alerts.show({ type: 'error' }, translate('alert.code_has_script'));

      this.state.loading = false;
      return false;
    }

    await saveSettings({
      'davwheat-ads.enabled-ad-locations': JSON.stringify(this.state.enabledLocations),
      'davwheat-ads.ca-pub-id': this.state.pubId,
      'davwheat-ads.custom-ad-script-urls': JSON.stringify(this.state.script_urls.filter((url) => url.length > 0)),
      'davwheat-ads.between-n-posts': this.state.betweenNPosts,
      'davwheat-ads.enable-ad-after-placeholder': this.state.enableAdAfterPlaceholder ? 1 : 0,

      ...Object.keys(this.state.code).reduce((prev, curr) => {
        return { ...prev, [`davwheat-ads.ad-code.${curr}`]: this.state.code[curr as AdUnitLocations] };
      }, {}),
    });

    this.onSettingsSaved();
    return true;
  }

  onSettingsSaved(): void {
    this.state.loading = false;
    this.state.isDirty = false;

    app.alerts.show({ type: 'success' }, app.translator.trans('core.admin.settings.saved_message'));
  }
}
