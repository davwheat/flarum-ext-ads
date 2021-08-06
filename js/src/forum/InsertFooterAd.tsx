import app from 'flarum/forum/app';

export default function InsertFooterAd() {
  const AdCode = app.data['davwheat-ads.ad-code.footer'] as string;

  const footer = document.createElement('footer');
  footer.className = 'davwheat-ad davwheat-ad-footer';

  document.querySelector('.App-content')!.append(footer);

  footer.innerHTML = AdCode;

  // Hacky way to detect URL change and re-create ad tag
  const pushState = history.pushState;
  history.pushState = function (...args) {
    pushState.apply(history, args);

    footer.innerHTML = AdCode;
    refreshAd();
  };

  refreshAd();

  function refreshAd() {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }
}
