/*
 * Package Import
 */
import express from 'express';
import { join } from 'path';
import { Server } from 'http';
import bodyParser from 'body-parser';
import config from 'config';
import cors from 'cors';


/*
 * Local Import
 */
import routes from './routes';


/*
 * Variable
 */

// Express
const app = express();

// Serveur Node
const server = Server(app);
const port = config.get('Server.port');

// Paths
const publicPath = join(__dirname, '..', 'public');


/*
 * Middleware
 */

// CORS
app.use(cors({
  // Coquille vide
  origin: 'http://localhost:3005',
  methods: ['GET', 'POST'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));

// Static Files
app.use(express.static(publicPath, {
  index: false,
}));

// Body Parser
app.use(bodyParser.json({ limit: '100kb' }));
app.use(bodyParser.urlencoded({ extended: true }));


/*
 * Routes
 */
routes(app);


/*
 * Server
 */
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`listening on *:${port}`);
});
