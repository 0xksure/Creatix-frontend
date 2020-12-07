import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import Discover from 'Components/Icons/Discover';
import Pricing from 'Components/Icons/Pricing';
import Home from 'Components/Icons/Home';

const BottomMenu = () => {
  const history = useHistory();
  return (
    <div className="grid-x grid-margin-x bottom-menu">
      <NavLink
        activeClassName="nav-link_active"
        className="cell small-4 bottom-menu__item"
        exact
        to="/"
      >
        <Home />
      </NavLink>
      <button
        type="button"
        className="cell small-4 bottom-menu__item"
        onClick={() => history.push('/discover')}
      >
        <div className="bottom-menu__item__content">
          <Discover />
        </div>
      </button>
      <button
        type="button"
        className="cell small-4 bottom-menu__item"
        onClick={() => history.push('/pricing')}
      >
        <div className="bottom-menu__item__content">
          <Pricing />
        </div>
      </button>
    </div>
  );
};

export default BottomMenu;
