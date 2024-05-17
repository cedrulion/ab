const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String, required: true },
  position: { type: String, required: true },
  phone: { type: String, required: true },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
