/*
 * Package Import
 */
import axios from 'axios';


/*
 * Local Import
 */

// Action @ Reducer
import { setAllProjects } from './ducks/portfolio';
import { setOneProject } from './ducks/project';

// Utils
import { normalizeDatas } from '../utils';

// Types
import { GET_ALL_PROJECTS, GET_ONE_PROJECT, SEND_MESSAGE } from './types';


/*
 * Variable
 */
const BASE_URL = 'http://localhost:3005/v1';
// const BASE_URL = 'http://abourdeaudhui.fr:3005/v1';


/*
 * Code
 */
const createMiddleware = store => next => (action) => {
  switch (action.type) {
    /*
     * Get all Project via Ajax.
     */
    case GET_ALL_PROJECTS:
      axios({
        method: 'GET',
        url: `${BASE_URL}/api/portfolio`,
      })
        .then(({ data }) => {
          store.dispatch(setAllProjects(normalizeDatas(data)));
        });
      break;


    /*
     * Get one Project via Ajax.
     */
    case GET_ONE_PROJECT:
      axios({
        method: 'GET',
        url: `${BASE_URL}/api/project/${action.id}`,
      })
        .then(({ data }) => {
          store.dispatch(setOneProject((data)));
        });
      break;


    /*
     * Send me a message
     */
    case SEND_MESSAGE:
      {
        const { form } = store.getState();
        const { name, email, phone, object, message } = form;

        axios({
          method: 'POST',
          url: `${BASE_URL}/form/send`,
          data: { name, email, phone, object, message },
        })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
      break;


    /*
     * If no action is find...
     * Do nothing, and go next.
     */
    default:
  }

  next(action);
};


/*
 * Actions Creators
 */
export const getAllProjects = () => ({
  type: GET_ALL_PROJECTS,
});

export const getOneProject = id => () => ({
  type: GET_ONE_PROJECT,
  id,
});

export const sendMessage = () => () => ({
  type: SEND_MESSAGE,
});


/*
 * Export
 */
export default createMiddleware;
