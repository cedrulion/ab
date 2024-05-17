const Registration = require('../models/Registration');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, organization, position, phone } = req.body;

    // Check if the email is already registered
    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // Create a new registration if the email is not already registered
    const newRegistration = new Registration({ name, email, organization, position, phone });
    await newRegistration.save();
    res.json({ message: 'Registration successful!', data: newRegistration });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Registration failed.' });
  }
};


exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching registrations.' });
  }
};
