/**
 * Defines server actions, to be performed via routes
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle=mongoose.model('Principle');
var ObjectId = require('mongoose').Types.ObjectId; 

/**
 * Gets the 'principles' data for a particular id
 */
exports.read = async ( req, res, next ) => {
    const query = { owner:new ObjectId(req.user._id) }
    const results = await Principle.find( query )
    res.send(results)
}

/**
 * Adds principle to existing list
 */
exports.add = async (req, res, next) => {
    try {
        const principle = new Principle({
            content:req.body.content,
            owner: new ObjectId(req.user.id)
        })
        const results = await principle.save()
        res.send(results)
    }
    catch (err) {
        res.send(err)
    }
}


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
