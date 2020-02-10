require('dotenv').config();
const mongoDB = require('./utils/mongoDB');
mongoDB.connect();
require('./schema'); // must be required before routes
