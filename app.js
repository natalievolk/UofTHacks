// create an express app
const express = require("express")
const app = express()

var mysql = require('mysql');

// dotenv - store passwords & secure info
const dotenv = require('dotenv');
dotenv.config({ path: './.env' })

var db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  db.query("CREATE TABLE IF NOT EXISTS `uofthacks`.`users`( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(100) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;", function (err, result) {
    if (err) throw err;
    console.log("Login table created");
  });
});

// use the express-static middleware - everything in the /public directory to be used (HTML, CSS, JS)
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3001, 
	() => console.log("Server is running..."));