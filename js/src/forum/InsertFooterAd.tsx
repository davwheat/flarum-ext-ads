import app from 'flarum/forum/app';
import RefreshAds from './RefreshAds';
import safelyEvalAdScript from './safelyEvalAdScript';

export default function InsertFooterAd() {
  const AdCode = app.data['davwheat-ads.ad-code.footer'] as string;
  const Script = app.data['davwheat-ads.ad-code.footer.js'] as string;

  const footer = document.createElement('footer');
  footer.className = 'davwheat-ad davwheat-ad-footer';
  footer.setAttribute('align', 'center');

  document.querySelector('.App-content')!.append(footer);

  footer.innerHTML = AdCode;

  // Hacky way to detect URL change and re-create ad tag
  const pushState = history.pushState;
  history.pushState = function (...args) {
    pushState.apply(history, args);

    footer.innerHTML = AdCode;
    RefreshAds();
    safelyEvalAdScript('footer', Script);
  };

  RefreshAds();
}
