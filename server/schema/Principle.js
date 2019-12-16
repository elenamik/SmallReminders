var mongoose = require('mongoose')
let Schema = mongoose.Schema

let PrincipleSchema = new Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: String
    },
)

module.exports = mongoose.model("Principle", PrincipleSchema);

