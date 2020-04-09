const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const signup = mongoose.Schema({
  first: {type: String, required: true},
  last: {type: String, required: true},
  username: { type: String, required: true},
  password: { type: String, required: true}
});

signup.plugin(uniqueValidator);

module.exports = mongoose.model('Signup', signup);
