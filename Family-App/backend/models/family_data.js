const mongoose = require('mongoose');

const fam = mongoose.Schema({
  _id: String,
  name: String,
  age: Number,
  occupation: String,
  gender: String,
  location: String,
  eyeColor: String,
  familyMember: String,
  picture: String
});

module.exports = mongoose.model('Fam', fam);
