const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/register', registrationController.registerUser);
router.get('/registrations', registrationController.getAllRegistrations);

module.exports = router;
