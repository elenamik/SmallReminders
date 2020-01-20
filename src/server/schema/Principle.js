var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrincipleSchema = new Schema(
  {
    owner: {
      type: String,
      ref: 'User',
      required: true
    },
    content: String
  }
);

module.exports = mongoose.model('Principle', PrincipleSchema);
