/*
 * Package Import
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';


/*
 * Local Import
 */
import routes from 'src/routes';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import ReturnTop from './ReturnTop';


/*
 * Component
 */
const App = () => (
  <div id="app">
    <Header />
    <div id="app-container">

      <Switch>
        {routes.map(route => (
          <Route exact key={route.path} path={route.path} component={route.component} />
        ))}
      </Switch>

      <ReturnTop />
    </div>
    <Footer />
  </div>
);


/*
 * Export
 */
export default App;
