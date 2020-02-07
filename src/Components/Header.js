import React from "react";
import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "./Icons/Logo";
import toggleModal from "../Actions/Modal";
import { HeaderButton, MainButton } from "./Buttons";
import { logoutUser } from "../Actions/Auth";

function Header({ toggle }) {
  const auth = useSelector(state => state.Auth);
  const dispatch = useDispatch();

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
              {auth.isAuthenticated && (
                <>
                  <li className="nav-item">
                    <HeaderButton>
                      <NavLink
                        activeClassName="nav-link_active"
                        className="nav-link"
                        exact
                        to={`/${auth.userID}/user-home`}
                      >
                        <h4
                          className="h4 medium-font small margin-zero"
                          id="header_main_nav_link"
                        >
                          Home
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                  <li className="nav-item">
                    <HeaderButton>
                      <NavLink
                        activeClassName="nav-link_active"
                        className="nav-link"
                        exact
                        to={`/${auth.userID}/feedback`}
                      >
                        <h4
                          className="h4 medium-font small margin-zero"
                          id="header_main_nav_link"
                        >
                          Feedback
                        </h4>
                      </NavLink>
                    </HeaderButton>
                  </li>
                </>
              )}
              <li className="nav-item">
                <HeaderButton>
                  <NavLink
                    activeClassName="nav-link_active"
                    className="nav-link"
                    exact
                    to="/"
                  >
                    <h4
                      className="h4 medium-font small margin-zero"
                      id="header_main_nav_link"
                    >
                      tenXamp
                    </h4>
                  </NavLink>
                </HeaderButton>
              </li>
              <li className="nav-item">
                <HeaderButton>
                  <NavLink
                    activeClassName="nav-link_active"
                    className="nav-link"
                    exact
                    to="/discover"
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
              {auth.isAuthenticated ? (
                <li className="nav-item" id="header_signup_modal">
                  <MainButton
                    id="header_signup_modal"
                    onToggle={() => dispatch(logoutUser())}
                  >
                    <NavLink
                      activeClassName="nav-link_active"
                      className="nav-link"
                      exact
                      to="/"
                    >
                      <h4
                        className="h4 medium-font small margin-zero"
                        id="header_logout_nav_link"
                      >
                        Logout
                      </h4>
                    </NavLink>
                  </MainButton>
                </li>
              ) : (
                <li className="nav-item" id="header_signup_modal">
                  <MainButton id="header_signup_modal" round={"round"}>
                    <NavLink
                      activeClassName="nav-link__active"
                      className="nav-link"
                      exact
                      to="/login"
                    >
                      <p
                        className="p margin-zero"
                        id="header_login_nav_link"
                      >
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
}

Header.propTypes = {
  toggle: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggle: toggleModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
