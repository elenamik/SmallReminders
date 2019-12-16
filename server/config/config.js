/**
 * Config for application
 */

require('dotenv').config()

module.exports = {
    mongoURL:`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@smallreminders-q5cgw.mongodb.net/small_reminders_dev?retryWrites=true&w=majority`,
    principlesAttribute:'principles'
}
