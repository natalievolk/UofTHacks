//handle register the user
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //password hasing

const mysql = require('mysql');
var db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    console.log(req.body);
    // sample req.body
    //{
    //   name: 'bob',
    //   email: 'bob123@mail.com',
    //   number: '6471234567',
    //   password: 'bob123',
    //   passwordConfirm: 'bob123'
    // }
    const { name, email, cell, password, passwordConfirm } = req.body;

    //check duplicates
    db.query(`
        SELECT email
        FROM users
        WHERE email = ? OR cell = ?
    `, [email, cell], async (err, results) => {
        if (err) {
            console.log(err);
        }
        else if (results.length > 0) {
            return res.render('register', {
                message: 'the email or phone is already in use!'
            });
        } else if ( password !== passwordConfirm) {
            return res.render('register', {
                message: "passwords don't match!"
            });
        } else {
            let hashedPassword = await bcrypt.hash(password, 8); // 8 is num of rounds
            console.log(hashedPassword);

            db.query(`INSERT INTO users SET ?`, { name:name, email:email, cell:cell, password:hashedPassword }, (err, results) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(results);
                    return res.render('register', {
                        message: 'user registered successfully'
                    });
                }
            })
        }
    });
}
