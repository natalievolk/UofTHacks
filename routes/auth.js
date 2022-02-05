
const express = require('express');
const authController = require('../controllers/auth'); //this file controls registration

const router = express.Router();

router.post('/register', authController.register); //call register

module.exports = router;