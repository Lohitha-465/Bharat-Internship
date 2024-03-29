const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
