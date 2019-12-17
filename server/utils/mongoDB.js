/**
 * Handles establishing mongoDB connection, and connection object
 */

var mongoose = require('mongoose')
const uri = require('../config/config').mongoURL


const connect = () => {
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

const getDB = () => {
    return mongoose.connection
}

const close = () => {
    return mongoose.disconnect()
}

module.exports = { connect, getDB, close }