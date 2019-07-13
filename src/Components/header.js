import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Components/login';
class Header extends React.Component {
  render() {
    return (
      <div className="grid-container full">
        <div className="grid-x header bg-gradient-creatix-header">
          <div className="cell small-9 medium-9 large-9 navigation">
            <ul className="menu navigation-menu">
              <li>
                <Link to="/">Creatix</Link>
              </li>
              <li>
                {' '}
                <Link to="/get-started">How to start creatix</Link>
              </li>
              <li>
                {' '}
                <Link to="/about">About</Link>{' '}
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
