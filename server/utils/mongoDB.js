/**
 * Handles establishing mongoDB connection, and connection object
 */

var mongoose = require('mongoose')
const uri = require('../config/config').mongoURL


const connect = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

const getDB = () => {
    return mongoose.connection
}

module.exports = { connect, getDB }