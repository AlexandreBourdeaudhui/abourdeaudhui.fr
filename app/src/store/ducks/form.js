/*
 * Local Import
 */
// Types
import {
  // Ajax
  SET_MESSAGE_SUCCESS,
  SET_MESSAGES_ERROR,

  // State
  RESET_STATE_FORM,

  // Actions
  HANDLE_INPUT_CHANGE,
} from '../types';


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

  // Results
  resultSuccess: '',
  resultError: '',

  // Error
  error: false,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // Ajax
    case SET_MESSAGE_SUCCESS:
      return {
        ...state,
        resultSuccess: action.message,
      };

    case SET_MESSAGES_ERROR:
      return {
        ...state,
        resultError: action.messages,
      };

    // State
    case RESET_STATE_FORM:
      return initialState;

    // Actions
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

export const resetStateQuiz = () => ({
  type: RESET_STATE_FORM,
});

export const setMessageSuccess = message => ({
  type: SET_MESSAGE_SUCCESS,
  message,
});

export const setMessagesError = messages => ({
  type: SET_MESSAGES_ERROR,
  messages,
});


/*
 * Selectors
 */
