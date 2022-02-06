const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //render index.hbs page
    res.render('index');
});

router.get('/register', (req, res) => {
    //render register.hbs page
    res.render('register');
});

router.get('/login', (req, res) => {
    //render login.hbs page
    res.render('login');
});

router.get('/journals', (req, res) => {
    //render journals.hbs page
    // console.log(req);
    res.render('partials/journals');
});


module.exports = router;