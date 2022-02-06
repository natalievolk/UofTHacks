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
    console.log(req.body);
    // sample req.body
    //{
    //   email: 'bob123@mail.com',
    //   password: 'bob123',
    // }
    const { email, password } = req.body;
    let hashedPassword = bcrypt.hash(password, 8); // 8 is num of rounds
    
    //check password correct
    db.query(`
        SELECT password, email, name
        FROM users
        WHERE email = ?
    `, [email], (err, results) => {

        if (err) {
            console.log(err);
        }
        console.log(results);
        if (results.length === 0) {
            return res.render('login', {
                success: false,
                message: "Couldn't find email in database, did you register?"
            });
        } bcrypt.compare(password, results[0].password, (err2, res2) => {
            if (err2) {
                return res.render('login', {
                    success: false,
                    message: "Server error"
                });
            } if (res2) {
                //passwords match - successful login
                return res.render('login', {
                    success: true,
                    email: results[0].email,
                    username: results[0].name,
                    message: "Login successful"
                });                  
            } else {
                return res.render('login', {
                    success: false,
                    message: "Password incorrect!"
                });                
            }
        })
        
        // hashedPassword.then( (res2) => {
        //     // hashedPassword returns a promise
        //     if ( res2 !== results[0].password ) {
        //         return res.render('login', {
        //             success: false,
        //             message: "password incorrect!"
        //         });
        //     } else {
        //         //passwords match - successful login
        //         return res.render('login', {
        //             success: true,
        //             message: "login successful"
        //         });   
        //     }
        // }); 
    
    });

}
