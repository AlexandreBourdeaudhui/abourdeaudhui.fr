/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local Import
 */
import Field from 'src/containers/Contact/Form/Field';


/*
 * Code
 */


// Datas
const fields = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Nom et Prénom *',
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Adresse E-mail *',
  },
  {
    id: 3,
    name: 'phone',
    type: 'phone',
    placeholder: 'Numéro de téléphone',
  },
  {
    id: 4,
    name: 'object',
    type: 'text',
    placeholder: 'Objet de votre message *',
  },
];


const Form = ({ actions, message, error }) => {
  /*
   * Actions
   */
  const onChange = (evt) => {
    const { name, value } = evt.target;
    actions.handleInputChange(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    actions.sendMessage();
  };


    /*
     * View
     */
  return (
    <form id="form" onSubmit={onSubmit}>

      <h2 className="contact-bloc-title">
        Envoyez-moi un message
      </h2>
      <p id="form-desc">* Champs obligatoires</p>

      <div id="form-field">
        {fields.map(field => (
          <Field
            key={field.id}
            onInputChange={onChange}
            {...field}
          />
        ))}
      </div>

      <div className={
        classNames('form-field',
        { 'form-field--has-value': message },
        { 'form-field--has-error': error },
      )}
      >
        <textarea
          // HTML
          name="message"
          placeholder="Votre message *"

          // React
          onChange={onChange}
          value={message}
        />

        <label htmlFor="message">
          Votre message *
        </label>
      </div>

      <button id="form-submit">
        Envoyer votre message
      </button>
    </form>
  );
};


/*
 * PropTypes
 */
Form.propTypes = {
  actions: PropTypes.objectOf(
    PropTypes.func.isRequired,
  ).isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};


/*
 * Export
 */
export default Form;
