const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = mongoose.model('User')

const getSampleUser = () => {
  const query = { name: /test/ }
  return User.findOne(query)
}

const logInSampleUser = async (req, res, next) => {
  req.user = await getSampleUser()
  console.log('using sample user:' + req.user.name)
  next()
}

module.exports = logInSampleUser
