const MongoClient = require('mongodb').MongoClient;
const url = require('./config').mongoURL;

let _db;

const connectToServer = async ( ) => {
    await MongoClient.connect( url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( client => {
        console.log("successfully connected to mongo client");
        _db = client.db();
        return;
    }).catch( err => {
        console.log("could not connect, check internet connection and login info");
        console.log("error is",err)
        throw(err)
    });
}

const getDB = () => {
    return _db;
}

const disconnectDB = () => {
    return _db.close()
}

module.exports = { connectToServer, getDB, disconnectDB }