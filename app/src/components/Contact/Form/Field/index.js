/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local Import
 */


/*
 * Code
 */
const Field = ({ onInputChange, error, value, name, type, placeholder }) => {
  /*
   * Actions
   */
  const inputChange = (evt) => {
    onInputChange(evt);
  };


  /*
   * View
   */
  return (
    <div className={classNames(
      'form-field',
      { 'form-field--has-value': value },
      { 'form-field--has-error': error },
    )}
    >
      <input
        // HTML
        name={name}
        placeholder={placeholder}
        type={type}

        // React
        onChange={inputChange}
        value={value}
      />

      <label htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
};


/*
 * PropTypes
 */
Field.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  name: PropTypes.oneOf([
    'name', 'email', 'phone', 'object',
  ]).isRequired,
  type: PropTypes.oneOf([
    'text', 'email', 'phone',
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default Field;
