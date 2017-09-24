/*
 * Package Import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


/*
 * Local Import
 */
import App from 'src/components/App';
import store from 'src/store';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const provider = (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  /*
   * Render
   */
  render(provider, document.getElementById('root'));
});
