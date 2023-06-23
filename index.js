const inquirer = require('inquirer');
const db = require('./connect');

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'startMenu',
            message: 'What would you like to do?',
            choices: [
                "Add a employee",
                "Update an employee role",
                "View all employees",
                "Add role",
                "View all roles",
                "Add a department",
                "View all departments",
                "Goodbye",
            ],
        },
    ])
        .then(function (answer) {
            switch (answer.startMenu) {
                case "Add a employee":
                    return addEmployee();
                case "Update an employee role":
                    return updateRole();
                case "View all employees":
                    return viewAllEmployees();
                case "Add role":
                    return addRole();
                case "View all roles":
                    return viewAllRoles();
                case "Add a department":
                    return addDepartment();
                case "View all departments":
                    return viewAllDepartments();
            }
        })
}

function addEmployee() {
    inquirer.prompt({
        name: 'employees',
        type: 'input',
        message: 'Enter the name of the new employee'
    })
    .then(function (answer) {
        db.query("INSERT INTO employee SET ?", { name: answer.employee }, function (err, res) {
            if (err) throw err;
            console.log("Empolyee added");
            start();
          })
      })
}