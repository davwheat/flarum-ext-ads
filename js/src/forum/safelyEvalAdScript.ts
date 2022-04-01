export default function safelyEvalAdScript(adPosition: string, script: string): void {
  try {
    eval(script);
  } catch (e) {
    console.group('[davwheat/ads] Failed to execute ad script');
    console.info(`An exception occurred while evaluating the ad script for ${adPosition}

To prevent your forum frontend breaking, we caught the error.

Please be aware, however, that this may prevent your ads functioning in some cases.`);
    console.info(
      `The stacktrace will be logged below to help you identify the issue. This may reference the ads extension, but the likelihood that the issue lies in there is extraordinarily miniscule.`
    );
    console.error(e);
    console.groupEnd();
  }
}
