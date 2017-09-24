/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */


/*
 * Code
 */
const WriteMe = ({ onToggleForm }) => (
  <p id="write-me">
    <span>Vous souhaitez des renseignements ?</span>

    <a
      className="write-item"
      href="mailto:alexandre.bourdeaudhui@gmail.com"
      title="Va ouvrir votre logiciel de messagerie"
    >
      <span className="write-item-puce" />
      alexandre.bourdeaudhui@gmail.com
    </a>

    <a className="write-item" href="" onClick={onToggleForm}>
      <span className="write-item-puce" />
      Formulaire de Contact
    </a>
  </p>
);


/*
 * PropTypes
 */
WriteMe.propTypes = {
  onToggleForm: PropTypes.func.isRequired,
};


/*
 * Export
 */
export default WriteMe;
