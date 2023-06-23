const inquirer = require('inquirer');
const sql = require('mysql2');

const connection = sql.genConnection({
    user: "root",
    password: "root",
    database: 'employee_db',
    host: 'localhost'
});
