import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import "./Assets/style/main.scss";
import App from "./Views/App";

if (process.env.NODE_ENV !== "production") {
  module.hot.accept();
}

const trackingID = process.env.TRACKING_ID;
const gtmId = process.env.GTM_ID;
ReactGA.initialize(trackingID, {
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});
TagManager.initialize({ gtmId });
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById("app"));
