const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')
require('dotenv').config()

const getUser = () => {
  const query = { name: /test/ }
  return User.findOne(query)
}

const logInSampleUser = async (req, res, next) => {
  req.user = await getUser()
  console.log('using sample user:' + req.user.name)
  console.log(req.user.name)
  next()
}

module.exports = logInSampleUser
