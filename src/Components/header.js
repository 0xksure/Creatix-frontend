import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Components/login";
class Header extends React.Component {
  render() {
    return (
      <div className="grid-container full">
        <div className="grid-x header">
          <div className="cell small-9 medium-9 large-9 navigation">
            <ul class="menu navigation-menu">
              <li>
                <NavLink to="/">Creatix</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/get-started">How to get started</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/about">About</NavLink>{" "}
              </li>
            </ul>
          </div>
          <Login />
        </div>
      </div>
    );
  }
}

export default Header;
