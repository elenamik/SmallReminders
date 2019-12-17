/**
 * Entry point for server, sets up middleware, routing
 */
const mongoDB = require('./utils/mongoDB');
mongoDB.connect()
require('./schema') // must be required before routes


 const app = require('./app')
 require('dotenv').config()
 console.log("dotenv test",process.env.TEST)

// Constants
const PORT = process.env.PORT || 8080 
const HOST = '0.0.0.0';
const server = app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)

module.exports = server