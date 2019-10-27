import React from "react";
import { bindActionCreators } from "redux";
import { connect, useSelector, shallowEqual } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "./Icons/Logo";
import LoginModal from "./Modals/LoginModal";
import toggleModal from "../Actions/Modal";
import { HeaderButton, MainButton } from "./Buttons";
import analyticsEvent from "../Utils/Analytics";

function Header({ toggle }) {
  const modalIsOpen = useSelector(
    state => state.Modal.modalIsOpen,
    shallowEqual
  );

  return (
    <header className="header" id="header">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell small-2 medium-2 large-5">
            <Link className="nav-link" to="/" id="header_logo_nav_link">
              <Logo className="svg-logo" />
            </Link>
          </div>
          <div className="cell small-10 medium-10 large-7">
            <nav className="site-nav">
              <ul className="nav-list">
                <li className="nav-item" id="header_main_nav_link">
                  <HeaderButton>
                    <NavLink
                      activeClassName="nav-link_active"
                      className="nav-link"
                      exact
                      to="/"
                    >
                      <h4 className="h4 medium-font small margin-zero">
                        tenXamp
                      </h4>
                    </NavLink>
                  </HeaderButton>
                </li>
                <li className="nav-item" id="header_discover_nav_link">
                  <HeaderButton>
                    <NavLink
                      activeClassName="nav-link_active"
                      className="nav-link"
                      exact
                      to="/discover"
                    >
                      <h4 className="h4 medium-font small margin-zero">
                        Discover
                      </h4>
                    </NavLink>
                  </HeaderButton>
                </li>
                <li className="nav-item" id="header_signup_modal">
                  <MainButton
                    onToggle={() => {
                      toggle(!modalIsOpen);
                      analyticsEvent(
                        "Sign up",
                        modalIsOpen ? "Closed modal" : "Open modal",
                        "Pushed the sign up button"
                      );
                    }}
                    modalIsOpen={modalIsOpen}
                  >
                    <div className="text">Sign up</div>
                  </MainButton>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {modalIsOpen && <LoginModal />}
    </header>
  );
}

Header.propTypes = {
  toggle: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggle: toggleModal }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
