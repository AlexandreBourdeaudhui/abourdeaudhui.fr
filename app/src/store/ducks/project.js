/*
 * Local Import
 */
// Types
import { SET_ONE_PROJECT } from '../types';


/*
 * initialState
 */
const initialState = {
  label: '',
  logo: '',
  description: '',
  stack: '',
  url: '',
  source: '',
  imgPresentation: '',
  images: [],

  // By default, datas aren't load.
  isFetching: true,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Add One project in state
     */
    case SET_ONE_PROJECT:
      return {
        ...state,
        ...action.project,

        // Datas is now load.
        isFetching: false,
      };


    /*
     * If no action find
     * Return current state
     */
    default:
      return state;
  }
};


/*
 * Actions Creators
 */
export const setOneProject = project => ({
  type: SET_ONE_PROJECT,
  project,
});


/*
 * Selectors
 */
