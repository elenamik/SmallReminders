const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

const uri = config.mongoURI;



module.exports = function () {
    const MongoClient = require('mongodb').MongoClient;
    const client = new MongoClient( uri, 
        { useNewUrlParser: true,
         useUnifiedTopology: true } // new server discover and monitor engine
    );

    client.connect( err => {
        console.log("connected to MongoDB")
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
    client.close();
    return client
});
}




// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://lena:<password>@smallreminders-q5cgw.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });