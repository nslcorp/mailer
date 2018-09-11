const mongoose = require('mongoose');
const { Schema } = mongoose;
const Recipient = require('./Recipient').Recipient;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

module.exports.Survey = mongoose.model('survey', surveySchema);
