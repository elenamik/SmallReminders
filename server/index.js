/**
 * Entry point for server, sets up middleware, routing
 */

const env = require('./utils/env')
env.loadEnv()
if (!env.checkEnv()) {
  console.log('WARNING - .env file not loaded')
  console.log('Qutting server')
  process.exit(1)
}

const mongoDB = require('./utils/mongoDB')
mongoDB.connect()
require('./schema') // must be required before routes

const app = require('./app')

// Constants
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'
const server = app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)

module.exports = server
