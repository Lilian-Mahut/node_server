import express from 'express';

// App Imports
import serverInitialisation from './setup/server-initialisation';
import serverStart from './setup/serverStart';

// Create express server
const server = express();

// Setup server
serverInitialisation(server);

// Start server
serverStart(server);
