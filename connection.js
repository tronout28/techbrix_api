const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "techbrix"
})

module.exports = db;