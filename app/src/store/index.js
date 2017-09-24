/*
 * Package Import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local Import
 */
import reducer from './reducer';
import createMiddleware from './middleware';


/*
 * Code
 */

// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Middlewares
const middleware = applyMiddleware(createMiddleware);
const middlewares = compose(middleware, ...devTools);

// Store
const store = createStore(reducer, middlewares);


/*
 * Export
 */
export default store;
