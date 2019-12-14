require('dotenv').config({path:'./process.env'})

module.exports = {
    mongoURI:`mongodb+srv://${process.env.MONG_USER}:${process.env.MONGO_PW}@smallreminders-q5cgw.mongodb.net/test?retryWrites=true&w=majority`
}