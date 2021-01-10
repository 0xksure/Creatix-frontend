import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import Logo from 'Components/Icons/LogoIcon';
import toggleModal from 'Actions/Modal';
import MainButton from 'Components/Buttons/MainButton';
import HeaderButton from 'Components/Buttons/HeaderButton';
import { logoutUser } from 'Actions/Auth';
import analyticsEvent from 'Utils/Analytics';

const SideMenu: React.FC = () => {
  const auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const enableLogin = process.env.ENABLE_LOGIN === 'true';

  return (
    <>
      <div className="grid-x horizontal-center">
        <div className="cell">
          <Link className="nav-link" to="/" id="header_logo_nav_link">
            <Logo className="svg-logo" />
          </Link>
        </div>
        <div className="cell">
          <nav className="site-nav">
            <ul className="nav-list">
              {auth.isAuthenticated ? (
                <>
                {auth.companyID.length>0 ? (
                  <li className="nav-item">
                  <HeaderButton onClick={() => analyticsEvent('click', 'user', 'user')}>
                    <NavLink
                      activeClassName="nav-link_active"
                      className="nav-link"
                      exact
                      to="/feedback"
                    >
                      <h4 className="h4 medium-font small margin-zero" id="header_main_nav_link">
                        Feedback
                      </h4>
                    </NavLink>
                  </HeaderButton>
                  </li>
                ) :
                ( <li className="nav-item">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                </li>)
                }

                {auth.company}
                 
                  <li className="nav-item">
                    <HeaderButton>
                      <NavLink
                        activeClassName="nav-link_active"
                        className="nav-link"
                        exact
                        to="/user"
                      >
                        <h4 className="h4 medium-font small margin-zero" id="header_main_nav_link">
                          User
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                  <li className="nav-item">
                    <HeaderButton onClick={() => analyticsEvent('click', 'feedback', 'feedback')}>
                      <NavLink
                        activeClassName="nav-link_active"
                        className="nav-link"
                        exact
                        to="/settings"
                      >
                        <h4 className="h4 medium-font small margin-zero" id="header_main_nav_link">
                          Settings
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <HeaderButton onClick={() => analyticsEvent('click', 'home', 'home')}>
                      <NavLink
                        as={Link}
                        activeClassName="nav-link_active"
                        className="nav-link"
                        to="/"
                      >
                        <h4 className="h4 medium-font small margin-zero" id="header_main_nav_link">
                          Home
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                  <li className="nav-item">
                    <HeaderButton onClick={() => analyticsEvent('click', 'discover', 'discover')}>
                      <NavLink
                        as={Link}
                        activeClassName="nav-link_active"
                        className="nav-link"
                        strict
                        exact
                        to="discover"
                      >
                        <h4
                          className="h4 medium-font small margin-zero"
                          id="header_discover_nav_link"
                        >
                          Discover
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                  <li className="nav-item">
                    <HeaderButton onClick={() => analyticsEvent('click', 'pricing', 'pricing')}>
                      <NavLink
                        as={Link}
                        activeClassName="nav-link_active"
                        className="nav-link"
                        strict
                        exact
                        to="pricing"
                      >
                        <h4
                          className="h4 medium-font small margin-zero"
                          id="header_discover_nav_link"
                        >
                          Pricing
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                </>
              )}
              {auth.isAuthenticated ? (
                <li className="nav-item" id="header_signup_modal">
                  <MainButton id="header_signup_modal" onClick={() => dispatch(logoutUser())}>
                    <NavLink activeClassName="nav-link_active" className="nav-link" to="/">
                      <h4 className="h4 medium-font small margin-zero" id="header_logout_nav_link">
                        Logout
                      </h4>
                    </NavLink>
                  </MainButton>
                </li>
              ) : (
                <li className="nav-item" id="header_signup_modal">
                  <MainButton
                    id="header_signup_modal"
                    round={true}
                    size={'medium'}
                    type="button"
                    onClick={() => analyticsEvent('click', 'login', 'login')}
                  >
                    <NavLink
                      as={Link}
                      activeClassName="nav-link__active"
                      className="nav-link"
                      to={enableLogin ? '/login' : '/contact-us'}
                    >
                      <p className="p margin-zero" id="header_login_nav_link">
                        Login
                      </p>
                    </NavLink>
                  </MainButton>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggle: toggleModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideMenu);
