/**
 * CRUD API for Principles Data
 */
const MongoDB = require('./mongoUtil')
const principlesDB = require('./config').principlesDB;
const principlesAttribute = require('./config').principlesAttribute;

const get = async ( params ) => {
    let query_result = undefined
    const collection = MongoDB.getCollection(principlesDB)

    // need to use .toArray in order to use promises
    await collection.find(params).toArray()
    .then( result => {
            query_result = result
    }).catch( err => {
            console.log("query failed within API")
            throw(err)
    });
    return query_result
}

const add = async ( params, payload ) => {
    let query_result = undefined
    const collection = MongoDB.getCollection(principlesDB)
    const action = {
        "$push": {
            [principlesAttribute]: payload
        }
    }

    await collection.findOneAndUpdate( params, action )
    .then( result => {
        query_result = result
    }).catch( err => {
        console.log("query error",err)
    })

    return query_result
}

const remove = async ( params, target ) => {
    let query_result = undefined
    const collection = MongoDB.getCollection(principlesDB)

    const action = {
        "$pull": {
            [principlesAttribute]: target
        }
    }
    await collection.findOneAndUpdate( params, action )
    .then( result => {
        query_result=result
    }).catch( err => {
        console.log("query error",err)
    })
    return query_result
}

module.exports = { get, add, remove }