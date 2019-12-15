/**
 * CRUD API for Principles Data
 */
const MongoDB = require('./mongoUtil')


 const get = async ( target, params ) => {
    let query_result = undefined;
    const db = MongoDB.getDB();
    const collection = db.collection(target)
    await collection.find(params).toArray()   // need to use .toArray in order to use promises
    .then( result => {
        console.log("fetched data")
        query_result=result;
    }).catch( err => {
        console.log("query failed")
        throw(err)
    })
    return query_result;
 }

 module.exports = { get }