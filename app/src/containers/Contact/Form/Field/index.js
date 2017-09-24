/*
 * Package Import
 */
import { connect } from 'react-redux';


/*
 * Local Import
 */
import Field from 'src/components/Contact/Form/Field';


/*
 * Code
 */

// State
const mapStateToProps = (state, { name }) => ({
  value: state.form[name],
  error: state.form.error,
});

// Actions
const mapDispatchToProps = null;


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FieldContainer = createContainer(Field);


/*
 * Export
 */
export default FieldContainer;
