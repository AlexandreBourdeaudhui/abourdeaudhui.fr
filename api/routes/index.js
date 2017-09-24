/*
 * Package Import
 */
import express from 'express';
import { join } from 'path';


/*
 * Local Import
 */

// Controller
import contactController from '../controller/contact';
import projectController from '../controller/project';

// Datas
import projects from '../data/projects.json';


/*
 * Variable
 */

// Frontend Files.
const indexPath = join(__dirname, '../..', '/public/index.html');

// Router
const apiRoutes = express.Router();
const formRoutes = express.Router();


/*
 * Export
 */
export default (app) => {
  /*
   * Api Routes.
   */
  // Set '/api' for apiRoutes.
  app.use('/v1/api', apiRoutes);

  // Portfolio
  apiRoutes.get('/portfolio', (request, response) => {
    response.send(projects);
  });

  // One project
  apiRoutes.get('/project/:id', projectController);


  /*
   * Form Routes.
   */

  // Set '/form' for formRoutes.
  app.use('/v1/form', formRoutes);

  // Send Me a Message
  formRoutes.post('/send', contactController);


  /*
   * Basic Routes.
   */

  // Homepage
  app.get('/', (request, response) => {
    response.sendFile(indexPath);
  });

  // Skills
  app.get('/competences', (request, response) => {
    response.sendFile(indexPath);
  });

  // All Projects
  app.get('/portfolio', (request, response) => {
    response.sendFile(indexPath);
  });

  // One Project
  app.get('/project/:id/:slug', (request, response) => {
    response.sendFile(indexPath);
  });

  // Contact
  app.get('/contact', (request, response) => {
    response.sendFile(indexPath);
  });

  // NotFound
  app.get('*', (request, response) => {
    response.sendFile(indexPath);
  });
};
