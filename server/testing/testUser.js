const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User=mongoose.model('User');
var ObjectId = require('mongoose').Types.ObjectId; 


const getUser = ( idString ) => {
    const query = { _id: new ObjectId(idString) }
    console.log("using test user",query)
    return User.findOne( query )
}

const logInTestUser = ( options )  => {
    return async (req, res, next) => {
        req.user = await getUser(options.idString)
        next()
    }
}

module.exports =  logInTestUser 

