//handle getting all journals the user

const mysql = require('mysql');
var db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    // sample req.body
    //{
    //   name: 'bob',
    //   email: 'bob123@mail.com',
    //   number: '6471234567',
    //   password: 'bob123',
    //   passwordConfirm: 'bob123'
    // }

    console.log(req.body);
    // const { name, email, cell, password, passwordConfirm } = req.body;

    // //check duplicates
    // db.query(`
    //     SELECT journal_entry
    //     FROM journal_entries
    //     WHERE journal_entries.phone_number = ?
    // `, [email, cell], async (err, results) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else if (results.length > 0) {
    //         return res.render('register', {
    //             success: false,
    //             message: 'the email or phone is already in use!'
    //         });
    //     } else if ( password !== passwordConfirm) {
    //         return res.render('register', {
    //             success: false,
    //             message: "passwords don't match!"
    //         });
    //     } else {
    //         let hashedPassword = await bcrypt.hash(password, 8); // 8 is num of rounds
    //         console.log(hashedPassword);

    //         db.query(`INSERT INTO users SET ?`, { name:name, email:email, cell:cell, password:hashedPassword }, (err, results) => {
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 console.log(results);
    //                 return res.render('register', {
    //                     success: true,
    //                     message: 'user registered successfully'
    //                 });
    //             }
    //         })
    //     }
    // });
}
