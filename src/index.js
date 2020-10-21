import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'Assets/style/main.scss';
import App from 'Views/App';
import rootReducer from 'Reducers';
import Footer from 'Components/Footer';
import Header from 'Components/Header';

import { createBrowserHistory } from 'history';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const history = createBrowserHistory();

const loggerMiddleware = createLogger();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStrore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)),
  );
  return store;
};
const store = configureStrore();

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
ReactDOM.render(
  <HelmetProvider>
    <Provider store={store}>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home - Creatix" />
      </Helmet>
      <Router history={history}>
        <div className="grid-container-full">
          <div className="grid-x">
            <div className="cell small-2 side-menu">
              <Header />
            </div>
            <div className="cell small-10 main-screen">
              <App />
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  </HelmetProvider>,
  document.getElementById('app'),
);
