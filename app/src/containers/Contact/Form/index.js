/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local Import
 */

// Components
import Form from 'src/components/Contact/Form';

// Actions
import { handleInputChange } from 'src/store/ducks/form';
import { sendMessage } from 'src/store/middleware';


/*
 * Code
 */

// State
const mapStateToProps = state => ({
  message: state.form.message,
  error: state.form.error,
  resultSuccess: state.form.resultSuccess,
  resultError: state.form.resultError,
});

// Actions
const mapDispatchToProps = (dispatch) => {
  const actions = {
    handleInputChange: handleInputChange(),
    sendMessage: sendMessage(),
  };

  return {
    actions: bindActionCreators(actions, dispatch),
  };
};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FormContainer = createContainer(Form);


/*
 * Export
 */
export default FormContainer;
