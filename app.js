// create an express app
const express = require("express");
const path = require("path");
const app = express();


var mysql = require('mysql');

// dotenv - store passwords & secure info
const dotenv = require('dotenv');
dotenv.config({ path: './.env' })

// all handlebar files must be in views directory
app.set('view engine', 'hbs');
const publicDirectory = path.join(__dirname, './public'); //__dirname is current directory

var db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

// require user to put phone number
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // note in query we CANNOT put quotes!! Leave id, name, cell, etc. as is...
  db.query(
    `CREATE TABLE IF NOT EXISTS uofthacks.users( 
      id INT NOT NULL AUTO_INCREMENT ,
      name VARCHAR(100) NOT NULL ,
      cell VARCHAR(15) NOT NULL ,
      email VARCHAR(100) NOT NULL ,
      password VARCHAR(255) NOT NULL ,
      PRIMARY KEY (id)
    )
    ENGINE = InnoDB;`,
    function (err, result) {
      if (err) throw err;
    console.log("Login table called users created");
  });
});

// parse url-encoded bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use the express-static middleware - everything in the /public directory to be used (HTML, CSS, JS)
app.use(express.static(publicDirectory));

// get routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/login', require('./routes/login'));

// start the server listening for requests
app.listen(process.env.PORT || 3001, 
	() => console.log("Server is running..."));