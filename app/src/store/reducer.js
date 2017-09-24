/*
 * Package Import
 */
import { combineReducers } from 'redux';


/*
 * Local Import
 */
import portfolio from 'src/store/ducks/portfolio';
import project from 'src/store/ducks/project';
import form from 'src/store/ducks/form';


/*
 * Code
 */
const reducer = combineReducers({ portfolio, project, form });


/*
 * Export
 */
export default reducer;
