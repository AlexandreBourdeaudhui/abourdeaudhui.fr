/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route } from 'react-router-dom';


/*
 * Local Import
 */


/*
 * Component
 */
const RouteTransition = ({ component: Component, location, path }) => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
  >
    <Route
      location={location}
      key={location.key}
      path={path}
      component={Component}
    />
  </CSSTransitionGroup>
);


/*
 * PropTypes
 */
RouteTransition.propTypes = {
  component: PropTypes.func.isRequired,
};


/*
 * Export
 */
export default RouteTransition;
