const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User=mongoose.model('User');
const Principle=mongoose.model('Principle');


const testUser = new User({
    name:"testUser-1"
})

const principle1 = new Principle({
    content: "if you are gossiping you have nothing valuable to talk about",
    owner:testUser._id
})

const principle2 = new Principle({
    content: "be forgiving, and try to help those that do not have the awareness to be kind",
    owner:testUser._id
})

testUser.save()
principle1.save()
principle2.save()

console.log("saved ?")