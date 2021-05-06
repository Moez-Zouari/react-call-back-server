import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Raven from "raven-js";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://dabead446f8543fd9ab257caf1546b92@o622065.ingest.sentry.io/5752464",
  {
    release: "1-0-0",
    environment: "development-test",
  }
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
