const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        user: 'root',
        password: 'root',
        database: 'employee_db',
        host: '127.0.0.1'
    },
    console.log(`Connected to the db`)
);

module.exports = db;