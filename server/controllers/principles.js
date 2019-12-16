/**
 * Defines server actions, to be executes by routes
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle=mongoose.model('Principle');
var ObjectId = require('mongoose').Types.ObjectId; 

/**
 * Gets the 'principles' data by user id
 */
exports.read = async ( req, res, next ) => {
    try {
        const query = { owner:new ObjectId(req.user._id) }
        console.log("reading principles for",JSON.stringify(query))
        const result = await Principle.find( query )
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }

}

/**
 * Adds principle to existing list
 * identified with owner attribute
 */
exports.add = async (req, res, next) => {
    try {
        const principle = new Principle({
            content:req.body.content,
            owner: new ObjectId(req.user._id)
        })
        console.log("adding principle",JSON.stringify(principle))
        const result = await principle.save()
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }
}

/**
 * Deletes principles by Id
 * validated with owner
 */
exports.delete = async (req, res, next ) => {
    try {
        const query = {
            _id: new ObjectId(req.body.id),
            owner: new ObjectId(req.user._id)
        }
        console.log("deleting principle",JSON.stringify(query))
        const result = await Principle.deleteOne(query)
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }

}