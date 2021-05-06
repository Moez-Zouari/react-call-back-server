import Raven from "raven-js";

function init() {
  Raven.config(
    "https://dabead446f8543fd9ab257caf1546b92@o622065.ingest.sentry.io/5752464",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
