const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const credentials = mongoose.Schema({
  email: { type: String, required: true},
  password: {type: String, required: true}
});
credentials.plugin(uniqueValidator);
module.exports = mongoose.model('Credentials', credentials);
