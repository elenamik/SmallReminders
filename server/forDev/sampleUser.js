const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')
const ObjectId = require('mongoose').Types.ObjectId;
require('dotenv').config()



const getUser = ( idString ) => {
    const query = { _id: new ObjectId(idString) } // might eventually not need this, if user is given as an object
    console.log(query)

    console.log("using test user",query)
    return User.findOne( query )
}

const logInSampleUser = ( options )  => {
    return async (req, res, next) => {
        req.user = await getUser(options.idString)
        next()
    }
}

module.exports =  logInSampleUser 

