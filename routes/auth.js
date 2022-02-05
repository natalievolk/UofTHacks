
const express = require('express');
const authControllerRegister = require('../controllers/register'); //this file controls registration

const router = express.Router();

router.post('/register', authControllerRegister.register); //call register

module.exports = router;