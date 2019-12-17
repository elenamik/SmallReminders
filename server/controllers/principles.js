/**
 * Defines server actions, to be executed by routes
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle = mongoose.model('Principle');
const ObjectId = require('../utils/mongoDB').ObjectId


/**
 * Gets all principles by owner
 */
exports.read = async ( req, res, next ) => {
    try {
        const user = req.user
        const query = { owner: user._id }
        const result = await Principle.find( query )
        console.log(result)
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }
}

/**
 * Add principle by owner
 */
exports.add = async (req, res, next) => {
    try {
        const user = req.user
        const content = req.body.content
        const principle = new Principle({
            content: content,
            owner: user._id
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
 * Deletes principles by principle ObjectId
 * validated by owner
 */
exports.delete = async (req, res, next ) => {
    try {
        const user = req.user
        const targetId = req.body.id
        // Id in the request is the ObjectId of principle to delete
        const query = {
            _id: targetId,
            owner: user._id
        }
        console.log("deleting principle",JSON.stringify(query))
        const result = await Principle.deleteOne(query)
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }
}

/**
 * Updates principle by ObjectId
 * validated by owner
 */
exports.update = async (req, res, next ) => {
    try {
        const user = req.user
        const targetId = req.body.id
        const query = {
            _id: targetId,
            owner: user._id
        }
        const update = {
            content: req.body.content
        }
        console.log(`updating principle ${JSON.stringify(query)} to ${JSON.stringify(update)}`)
        const result = await Principle.updateOne(query,update)
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }
}