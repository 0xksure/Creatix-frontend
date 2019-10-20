import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "./Assets/style/main.scss";
import App from "./Views/App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV !== "production") {
  module.hot.accept();
}
const trackingID = process.env.TRACKING_ID;
ReactGA.initialize(trackingID, {
  debug: true,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
