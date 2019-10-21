import React from "react";

// React redux

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import GetStarted from "../Components/GetStarted";
import Discover from "../Components/Discover";
import rootReducer from "../Reducers";

const history = createBrowserHistory();

// redux
const loggerMiddleware = createLogger();

function configureStrore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
const store = configureStrore();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <Helmet>
          <title>Creatix</title>
          <meta
            name="description"
            content="Creatix homepage with information about how business transparency can be made simple through feedback cards, organization structure and team cards."
          />
        </Helmet>
        <div className="grid-container-full">
          <Router history={history}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/main" component={Home} />
              <Route path="/main/:topic" component={Home} />
              <Route path="/discover" component={Discover} />
              <Route path="/get-started" component={GetStarted} />
              <Route path="/login" component={Home} />
              <Route component={Home} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
