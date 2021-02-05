import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Home from 'Components/Home';
import Signup from 'Components/Signup/Signup';
import ContactModal from 'Components/Contact/ContactModal';
import Login from 'Components/Login';
import UserHome from 'Components/User';
import Settings from 'Components/Settings';
import Discover from 'Components/Discover';
import Pricing from 'Components/Pricing';
import Feedback from 'Components/Feedback';
import ForgotPassword from 'Components/ForgotPassword';
import { verifyAuth } from 'Actions/Auth';
import { useSelector, useDispatch } from 'react-redux';
import ReactGA from 'react-ga';

const SecretRoute = (props) => {
  const { path, component: Component, isAuthenticated, hasAuthenticated } = props;
  if (isAuthenticated) {
    return (
      <Route path={path}>
        <Component />
      </Route>
    );
  } else if (!isAuthenticated && hasAuthenticated) {
    return <Redirect to="/login" />;
  } else {
    return <h1>Loading</h1>;
  }
};

const RedirectIfAuthenticated = (Component, isAuthenticated) => {
  if (isAuthenticated) {
    return <Redirect to="/user" />;
  } else {
    return <Component />;
  }
};

const usePageViews = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('new data: ', location);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    dispatch(verifyAuth());
  }, [location]);
};

const Router: React.FC = () => {
  usePageViews();

  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const hasAuthenticated = useSelector((state) => state.Auth.hasAuthenticated);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/discover">
        <Discover />
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route path="/main">
        <Home />
      </Route>
      <Route path="/main/:topic">
        <Home />
      </Route>
      <Route path="/login" render={() => RedirectIfAuthenticated(Login, isAuthenticated)} />
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/contact-us">
        <ContactModal />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <SecretRoute
        path="/user"
        component={UserHome}
        isAuthenticated={isAuthenticated}
        hasAuthenticated={hasAuthenticated}
      />
      <SecretRoute
        path="/:companyId/feedback/:fid"
        component={Feedback}
        isAuthenticated={isAuthenticated}
        hasAuthenticated={hasAuthenticated}
      />
      <SecretRoute
        path="/:companyId/feedback"
        component={Feedback}
        isAuthenticated={isAuthenticated}
        hasAuthenticated={hasAuthenticated}
      />

      <SecretRoute
        path="/settings"
        component={Settings}
        isAuthenticated={isAuthenticated}
        hasAuthenticated={hasAuthenticated}
      />
    </Switch>
  );
};

export default Router;
