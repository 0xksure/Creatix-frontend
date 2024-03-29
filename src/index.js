import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'Assets/style/main.scss';
import App from 'Views/App';

if (process.env.NODE_ENV !== 'prod') {
  module.hot.accept();
}
const trackingID = process.env.TRACKING_ID;
ReactGA.initialize(trackingID, {
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById('app'));
