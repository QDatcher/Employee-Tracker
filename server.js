const inquirer = require('inquirer')

const init = () => {
    inquirer
        .prompt({
            name: 'userChoice',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
        })
}

const serverResponse = (choice) => {
    switch(choice){
        case 'View All Employees' :
            return;
        case 'Add Employee' :
            return;
        case 'Update Employee Role':
            return;
        case 'View All Roles':
            return;
        case 'Add Role':
            return;
        case 'View All Departments':
            return;
        case 'Add Department':
            return;
    }
}
