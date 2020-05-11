const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const signup = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
});

signup.plugin(uniqueValidator);
module.exports = mongoose.model('Signup', signup);
