import React from 'react';
import PropTypes from 'prop-types';

// React redux

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from 'Components/Header';
import Home from 'Components/Home';
import Signup from 'Components/Signup/Signup';
import Login from 'Components/Login';
import UserHome from 'Components/User';
import Footer from 'Components/Footer';
import Discover from 'Components/Discover';
import rootReducer from 'Reducers';
import Validation from 'Utils/Validation';
import Feedback from 'Components/Feedback';
import ForgotPassword from 'Components/ForgotPassword';
import { verifyAuth } from 'Actions/Auth';

const history = createBrowserHistory();

// redux
const loggerMiddleware = createLogger();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

function configureStrore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)),
  );
  store.dispatch(verifyAuth());
  return store;
}
const store = configureStrore();

history.listen(() => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
});

const SecretRoute = ({ path, children }) => {
  return (
    <Route path={path}>
      <Validation>{children}</Validation>
    </Route>
  );
};

SecretRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

const App: React.FC = () => {
  return (
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
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/discover">
                    <Discover />
                  </Route>
                  <Route path="/main">
                    <Home />
                  </Route>
                  <Route path="/main/:topic">
                    <Home />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/forgot-password">
                    <ForgotPassword />
                  </Route>
                  <SecretRoute path="/user">
                    <UserHome />
                  </SecretRoute>
                  <SecretRoute path="/feedback">
                    <Feedback />
                  </SecretRoute>
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
