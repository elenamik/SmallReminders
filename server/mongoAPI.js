/**
 * CRUD API for Principles Data
 */
const MongoDB = require('./mongoUtil')



const get = async ( targetCollection, params ) => {
    let query_result = undefined
    const collection = MongoDB.getCollection(targetCollection)

    // need to use .toArray in order to use promises
    await collection.find(params).toArray()
    .then( result => {
            console.log("fetched data")
            query_result = result
    }).catch( err => {
            console.log("query failed within API")
            throw(err)
    });
    return query_result
}

const add = async ( targetCollection, params ) => {
    let query_result = undefined
    const collection = MongoDB.getCollection(targetCollection)
    const query = {
        _id: params._id
    }

    const update = {
        "$push": {
            [params.targetAttribute]: params.payload
        }
    }

    await collection.findOneAndUpdate( query, update )
    .then( result => {
        console.log(result)
        query_result = result
    }).catch( err => {
        console.log("query error",err)
    })

    return query_result
}

const remove = async ( targetCollection, params ) => {
    let query_result = undefined
    const collection = MongoDB.getCollection(targetCollection)

    const query = {
        _id: params._id
    }

    const update = {
        "$pull": {
            [params.targetAttribute]: params.payload
        }
    }
    await collection.findOneAndUpdate( query, update )
    .then( result => {
        console.log(result)
    }).catch( err => {
        console.log("query error",err)
    })
    return query_result
}

 module.exports = { get, add, remove }