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

exports.login = (req, res) => {
    console.log("hello?");
    console.log(req.body);
    // sample req.body
    //{
    //   email: 'bob123@mail.com',
    //   password: 'bob123',
    // }
    const { email, password } = req.body;
    console.log(req.body);
    let hashedPassword = bcrypt.hash(password, 8); // 8 is num of rounds
    
    //check password correct
    db.query(`
        SELECT password
        FROM users
        WHERE email = ?
    `, [email], (err, results) => {

        if (err) {
            console.log(err);
        }
        console.log(results);
        if (results.length === 0) {
            return res.render('login', {
                message: "couldn't find email in database"
            });
        } hashedPassword.then( (res) => {
            // hashedPassword returns a promise
            if ( res !== results[0].passowrd ) {
                console.log(results[0].password);  
                console.log(res);
                return res.render('login', {
                    message: "password incorrect!"
                });
            }
        });
         
            // db.query(`INSERT INTO users SET ?`, { name:name, email:email, cell:cell, password:hashedPassword }, (err, results) => {
            //     if(err) {
            //         console.log(err);
            //     } else {
            //         console.log(results);
            //         return res.render('register', {
            //             message: 'user registered successfully'
            //         });
            //     }
            // })
        return res.render('login', {
            message: "login successful"
        });
        
    });
}
