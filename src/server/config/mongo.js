/**
 * Config for mongodb connection
 */
module.exports = {
  mongoURL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_URL}/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
};
