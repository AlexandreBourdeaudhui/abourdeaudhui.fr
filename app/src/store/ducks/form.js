/*
 * Local Import
 */
// Types
import { HANDLE_INPUT_CHANGE } from '../types';


/*
 * initialState
 */
const initialState = {
  // Inputs
  name: '',
  email: '',
  phone: '',
  object: '',
  message: '',

  // Error
  error: false,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Handle Input Change
     */
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };


    /*
     * If no action is find
     * Return current state
     */
    default:
      return state;
  }
};


/*
 * Actions Creators
 */
export const handleInputChange = () => (name, value) => ({
  type: HANDLE_INPUT_CHANGE,
  name,
  value,
});

/*
 * Selectors
 */
