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


const Form = ({ resultSuccess, resultError, message, error, actions }) => {
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
      <h2 className="contact-bloc-title">Envoyez-moi un message</h2>

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

      <div className={classNames('form-field',
        { 'form-field--has-value': message },
        { 'form-field--has-error': error },
      )}
      >
        <textarea
          name="message"
          placeholder="Votre message *"
          onChange={onChange}
          value={message}
        />

        <label htmlFor="message">Votre message *</label>
      </div>

      <button id="form-submit">Envoyer votre message</button>

      {resultSuccess &&
        <span className="result result--success">
          {resultSuccess}
        </span>
      }

      {resultError &&
        resultError.map(messageError => (
          <span key={messageError} className="result result--error">
            {messageError}
          </span>
        ))}
    </form>
  );
};


/*
 * PropTypes
 */
Form.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/*
 * Export
 */
export default Form;
