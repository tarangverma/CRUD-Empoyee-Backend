const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  department: String,
  position: String,
  salary: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;