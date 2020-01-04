/**
 * Entry point for server, sets up middleware, routing
 */

require('dotenv').config();
const mongoDB = require('./utils/mongoDB');
mongoDB.connect();
require('./schema'); // must be required before routes

const app = require('./app');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const server = app.listen(PORT, HOST);

console.log(`Node server is running on http://${HOST}:${PORT}`);

module.exports = server;
