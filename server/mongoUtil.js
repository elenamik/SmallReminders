/**
 * Handles establishing mongoDB connection, and connection object
 */

const MongoClient = require('mongodb').MongoClient;
const url = require('./config').mongoURL;

let MongoObj = {
     _db: undefined
};

const connectToServer = async ( ) => {
    await MongoClient.connect( url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( client => {
        console.log("successfully connected to mongo client");
        MongoObj._db = client.db();
        return;
    }).catch( err => {
        console.log("could not connect, check internet connection and login info");
        console.log("error is",err)
        throw(err)
    });
}

const getDB = () => {
    return MongoObj._db;
}

const getCollection = ( targetCollection) => {
    return MongoObj._db.collection(targetCollection)
}


const disconnectDB = () => {
    return MongoObj._db.close()
}

module.exports = { connectToServer, getDB, getCollection, disconnectDB }