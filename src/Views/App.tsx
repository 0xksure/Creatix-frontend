import React from 'react';
import Footer from 'Components/Footer';
import SideMenu from 'Components/SideMenu';
import BottomMenu from 'Views/BottomMenu';
import { useIsMobile } from 'Utils/hooks';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import Router from 'Views/Router';

import rootReducer from 'Reducers';

import { createBrowserHistory } from 'history';

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
const store = configureStrore({});

const App: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home - Creatix" />
        </Helmet>
        <BrowserRouter history={history}>
          <div className="grid-container-full">
            <div className="grid-x">
              {!isMobile && (
                <div className="cell small-2 side-menu">
                  <SideMenu />
                </div>
              )}
              {isMobile && <BottomMenu />}
              <div className="cell auto main-screen">
                <Router />
              </div>
            </div>
            <footer className="grid-container footer">
              <Footer />
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
