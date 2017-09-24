/*
 * Package Import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import routes from 'src/routes';


/*
 * Code
 */
const routesHasLabel = routes.filter(route => route.label);


/*
 * Component
 */
const Nav = ({ onHideMenu }) => (
  <nav id="header-nav">

    <div id="header-nav-me">
      <h1 id="header-nav-me-name">
        Alexandre Bourdeaud'hui
      </h1>
      <p id="header-nav-me-dev">
        Développeur FullStack Javascript Junior
      </p>
    </div>

    <div id="header-nav-link">
      {routesHasLabel.map(route => (
        <NavLink
          // HTML
          className="nav-menu-items"
          activeClassName="nav-menu-items--active"

          // React
          exact
          key={route.label}
          to={`${route.path}`}
          onClick={onHideMenu}
        >
          <span>
            {route.label}
          </span>
        </NavLink>
      ))}
    </div>
  </nav>
);


/*
* PropTypes
*/
Nav.propTypes = {
  onHideMenu: PropTypes.func.isRequired,
};


/*
 * Export
 */
export default Nav;
