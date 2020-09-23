import React from "react";
import PropTypes from "prop-types";

// React redux

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { composeWithDevTools } from "redux-devtools-extension";
import Header from "Components/Header";
import Home from "Components/Home";
import Signup from "Components/Signup";
import Login from "Components/Login";
import UserHome from "Components/User";
import Footer from "Components/Footer";
import Discover from "Components/Discover";
import rootReducer from "Reducers";
import Validation from "Utils/Validation";
import Feedback from "Components/Feedback";
import ForgotPassword from "Components/ForgotPassword";
import { verifyAuth } from "Actions/Auth";

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
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
  store.dispatch(verifyAuth());
  return store;
}
const store = configureStrore();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const SecretRoute = ({ Component, path }) => {
  return (
    <Route
      path={path}
      render={() => (
        <Validation>
          <Component />
        </Validation>
      )}
    />
  );
};

SecretRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home - Creatix" />
        </Helmet>
        <div className="grid-container-full">
          <Router history={history}>
            <div className="grid-x">
              <div className="cell small-2 side-menu">
                <Header />
              </div>
              <div className="cell small-10 main-screen">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/main" component={Home} />
                  <Route path="/main/:topic" component={Home} />
                  <Route path="/discover" component={Discover} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <SecretRoute path="/user" Component={UserHome} />
                  <SecretRoute path="/feedback" Component={Feedback} />
                </Switch>
              </div>
            </div>
            <Footer />
          </Router>
        </div>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
