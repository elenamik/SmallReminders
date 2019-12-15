/**
 * Defines server actions, to be performed via routes
 */
const mongoAPI = require('../mongoAPI')
const testUser = require('../../testUser')

/**
 * Gets the 'principles' data for a particular id
 */
exports.fetchData = ( req, res, next) => {
        const params = { _id: testUser.id }
        mongoAPI.get('principles_prod', params)
        .then( result => {
            req.data=result
            console.log(result)
            next()
        }).catch( err => {
            console.log("data query failed within controller",err)
            res.send("error")
        }) 
}

/**
 * Prints data in GUI
 */
//TODO: change to SSR React
exports.displayData = (req, res, next) => {
    res.send(JSON.stringify(req.data) || "none" )
}

/**
 * Adds principle to existing list
 */
exports.addPrinciple = (req, res, next) => {
    const params = { 
        _id: testUser.id,
        targetAttribute: 'principles',
        payload: 'if you gossip, it means you have nothing better to talk about'
    }
    mongoAPI.add( 'principles_prod', params )
    .then( result => {
        res.send("success?")
    }).catch( err => {
        res.send("error",err)
    })
}

exports.removePrinciple = (req, res, next) => {
    const params = { 
        _id: testUser.id,
        targetAttribute: 'principles',
        payload: null
    }
    mongoAPI.remove( 'principles_prod', params )
    .then( result => {
        res.send("success?")
    }).catch( err => {
        res.send("error",err)
    })
}
