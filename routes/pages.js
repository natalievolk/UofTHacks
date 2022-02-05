const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //render index.hbs page
    res.render('index');
});

router.get('/register', (req, res) => {
    //render index.hbs page
    res.render('register');
});

router.get('/login', (req, res) => {
    //render index.hbs page
    res.render('login');
});


module.exports = router;