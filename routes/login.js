const express = require('express');

const authControllerLogin = require('../controllers/login'); //this file controls registration

const router = express.Router();

router.post('/login', authControllerLogin.login); //login register

module.exports = router;