export default function RefreshAds() {
  try {
    // @ts-ignore
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch {
    setTimeout(RefreshAds, 1000);
  }
}
