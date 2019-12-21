const loadEnv = () => {
  require('dotenv').config()
}

const checkEnv = () => {
  if (process.env.TEST) {
    return true
  } else {
    return false
  }
}

module.exports = { loadEnv, checkEnv }
