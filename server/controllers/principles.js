/**
 * Defines server actions, to be executes by routes
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Principle = mongoose.model('Principle');

/**
 * Gets the 'principles' data by user id
 */
exports.read = async ( req, res, next ) => {
    try {
        const query = { owner: user.objectId }
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
            owner: user.objectId
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
        // Id in the request is the object Id of principle to delete
        const query = {
            _id: new ObjectId(req.body.id),
            owner: req.user.objectId
        }
        console.log("deleting principle",JSON.stringify(query))
        const result = await Principle.deleteOne(query)
        res.send(result)
    }
    catch (err) {
        res.send(String(err))
    }
}

exports.update = async (req, res, next ) => {
    try {
        const query = {
            _id: new ObjectId(req.body.id),
            owner: req.user.objectId
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