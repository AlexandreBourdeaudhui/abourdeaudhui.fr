/*
 * Local Import
 */
// Types
import { SET_ALL_PROJECTS } from '../types';


/*
 * initialState
 */
const initialState = {
  allIds: [],
  byId: {},

  // By default, datas aren't load.
  isFetching: true,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {


    /*
     * Add All projects in state
     */
    case SET_ALL_PROJECTS:
      return {
        ...state,
        allIds: action.projects.allIds,
        byId: action.projects.byId,

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
export const setAllProjects = projects => ({
  type: SET_ALL_PROJECTS,
  projects,
});


/*
 * Selectors
 */
