/*
 * Package Import
 */
import React, { Component } from 'react';
import classNames from 'classnames';


/*
 * Local Import
 */

// Containers
import Form from 'src/containers/Contact/Form';

// Composant
import Information from './Information';
import WriteMe from './WriteMe';
import Social from './Social';


/*
 * Code
 */
class Contact extends Component {
  /*
   * State
   */
  state = {
    formIsOpen: false,
  };


  /*
   * Actions
   */
  onToggleForm = (event) => {
    event.preventDefault();
    const { formIsOpen } = this.state;

    if (formIsOpen) {
      this.hideForm();
    }
    else {
      this.showForm();
    }
  }

  hideForm = () => {
    this.setState({ formIsOpen: false });
  }

  showForm = () => {
    this.setState({ formIsOpen: true });
  }


  /*
   * Render
   */
  render() {
    const { formIsOpen } = this.state;


    /*
     * View
     */
    return (
      <div id="contact">
        <div className={classNames('contact', { 'form--is-open': formIsOpen })}>

          <div id="contact-img">
            <img alt="Illustration de la page Contact" src="/images/contact.jpg" />
          </div>

          {/* Formulaire de contact */}
          {formIsOpen && <Form formIsOpen={formIsOpen} />}
        </div>

        <div className="contact">

          {/* Information */}
          <div className="contact-bloc">
            <h2 className="contact-bloc-title">
              Me contacter
            </h2>
            <Information />
          </div>

          {/* Mail + Formulaire de Contact */}
          <div className="contact-bloc">
            <h2 className="contact-bloc-title">
              M'écrire
            </h2>
            <WriteMe onToggleForm={this.onToggleForm} />
          </div>


          {/* Résaux Sociaux */}
          <div className="contact-bloc">
            <h2 className="contact-bloc-title">
              Social
            </h2>
            <Social />
          </div>
        </div>

      </div>
    );
  }
}

/*
 * Export
 */
export default Contact;
