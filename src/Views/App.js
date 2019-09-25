import React from "react";

// React redux

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { browserHistory } from "react-router";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import GetStarted from "../Components/GetStarted";
import Discover from "../Components/Discover";
import rootReducer from "../Reducers";

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

function App() {
  return (
    <Provider store={store}>
      <div className="grid-container-full">
        <Router history={browserHistory}>
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
  );
}

export default App;
