var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SMSAction = new Schema(
  {
    owner: {
      type: String,
      required: true
    },
    content: String,
    sendTime: Date,
    status: {
      type: String,
      required: true,
      default: 'new'
    }
  }
);

module.exports = mongoose.model('SMSAction', SMSAction);
