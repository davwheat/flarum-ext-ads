export default function RefreshAds() {
  let attempts = 0;

  try {
    attempts++;
    // @ts-ignore
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch {
    if (attempts < 10) setTimeout(RefreshAds, 1000);
  }
}
