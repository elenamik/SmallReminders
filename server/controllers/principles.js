/**
 * Defines server actions, to be performed via routes
 */
const principlesAPI = require('../principles/crudAPI')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle=mongoose.model('Principle');

/**
 * Gets the 'principles' data for a particular id
 */
exports.fetchData = async ( req, res, next ) => {
    console.log("on request",req.user)
    // principlesAPI.get(req.body.id)
    // .then( result => {
    //     req.data=result
    //     console.log(result)
    //     next()
    // }).catch( err => {
    //     console.log("data query failed within controller",err)
    //     res.send("error")
    // }) 
    const query = {}
    await Principle.find()
    res.send("yes")

}

/**
 * Prints data in GUI
 */
// //TODO: change to SSR React
// exports.displayData = (req, res, next) => {
//     res.send(JSON.stringify(req.data) || "none" )
// }

/**
 * Adds principle to existing list
//  */
// exports.updatePrinciples = (req, res, next) => {
//     const payload = ['be grateful always']
//     principlesAPI.add( req.body.id, payload )
//     .then( result => {
//         req.data=result
//         next()
//     }).catch( err => {
//         res.send("error",err)
//     })
// }


// exports.create = (req, res, next) => {
//     principlesAPI.create()
//     .then( result => {
//         console.log(result.ops)
//         req.data=result
//         next()
//     })
//     .catch( err => {
//         console.log(err)
//         res.send("error",err)
//     })
// }
