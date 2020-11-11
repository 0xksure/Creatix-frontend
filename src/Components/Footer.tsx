import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="grid-container footer">
      <div className="grid-x footer-content">
        <div className="cell small-4 shrink">
          <h3 className="h3 pink center"> Creatix </h3>
        </div>

        <div className="cell auto ">
          <NavLink activeClassName="nav-link_active" className="nav-link" exact to="/contact-us">
            <p className="p"> Contact us </p>
          </NavLink>
        </div>
        <div className="cell auto ">
          <p className="p"> Discover </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
