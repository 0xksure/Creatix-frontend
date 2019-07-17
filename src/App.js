import React from 'react';
import logo from './logo.svg';

// React redux
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';

import SVG from 'react-inlinesvg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Components/header';
import Front from './Components/front';
import Footer from './Components/footer';
import About from './Components/about';
import GetStarted from './Components/getStarted';
import thunk from 'redux-thunk';

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
      <div className="grid-container full">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Front} />
            <Route exact path="/main" component={Front} />
            <Route path="/main/:topic" component={Front} />
            <Route path="/about" component={About} />
            <Route path="/get-started" component={GetStarted} />
            <Route path="/login" component={Front} />
            <Route component={Front} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
