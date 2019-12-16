/**
 * Defines server actions, to be performed via routes
 */
const principlesAPI = require('../principlesAPI')
const testUser = require('../../testUser')

/**
 * Gets the 'principles' data for a particular id
 */
exports.fetchData = ( req, res, next ) => {
    const params = { _id: testUser.id }
    principlesAPI.get(params)
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
    const params = {  _id: testUser.id }
    const payload = 'be grateful always'
    principlesAPI.add( params, payload )
    .then( result => {
        req.data=result
        next()
    }).catch( err => {
        res.send("error",err)
    })
}

exports.removePrinciple = (req, res, next) => {
    const params = { _id: testUser.id }
    const target='no mo'
    principlesAPI.remove( params, target )
    .then( result => {
        req.data=result
        next()
    }).catch( err => {
        res.send("error",err)
    })
}
