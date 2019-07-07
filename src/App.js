import React from "react";
import logo from "./logo.svg";

import SVG from "react-inlinesvg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Components/header";
import Front from "./Components/front";
import Footer from "./Components/footer";

function App() {
  return (
    <Router>
      <div className="grid-container full">
        <Header />
        <Switch>
          <Route path="/" exact component={Front} />
          <Route path="/about" component={Front} />
          <Route path="/get-started" component={Front} />
          <Route path="/login" component={Front} />
          <Route component={Front} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
