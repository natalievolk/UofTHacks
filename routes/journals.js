const express = require('express');
const authControllerRegister = require('../controllers/journals'); //this file controls registration

const router = express.Router();

router.post('/journals', authControllerRegister.journals); //call register

module.exports = router;