import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import ReactGA from 'react-ga';
import Home from 'Components/Home';
import Signup from 'Components/Signup/Signup';
import Login from 'Components/Login';
import UserHome from 'Components/User';
import Discover from 'Components/Discover';
import Feedback from 'Components/Feedback';
import ForgotPassword from 'Components/ForgotPassword';
import { verifyAuth } from 'Actions/Auth';

const SecretRoute = (props) => {
  const { path, component: Component, isAuthenticated } = props;

  if (isAuthenticated) {
    return (
      <Route path={path}>
        <Component />
      </Route>
    );
  } else {
    return <h1>you are not logged in</h1>;
  }
};

const usePageViews = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    dispatch(verifyAuth());
  }, [location]);
};

interface Prop {
  isAuthenticated: boolean;
}
const App: React.FC<Prop> = (props) => {
  usePageViews();
  console.log(props.isAuthenticated);
  return (
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
      <SecretRoute path="/user" component={UserHome} isAuthenticated={props.isAuthenticated} />
      <SecretRoute path="/feedback" component={Feedback} isAuthenticated={props.isAuthenticated} />
      <SecretRoute path="/settings" component={UserHome} isAuthenticated={props.isAuthenticated} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});
export default connect(mapStateToProps)(App);
