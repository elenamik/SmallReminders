var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrincipleSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: String
  }
);

module.exports = mongoose.model('Principle', PrincipleSchema);
