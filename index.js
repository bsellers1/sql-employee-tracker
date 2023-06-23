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
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateRole();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "View all departments":
                    viewAllDepartments();
                    break;
            }
        })
}