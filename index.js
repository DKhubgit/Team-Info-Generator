const inquirer = require('inquirer');
const fs = require('fs');
const helper = require('./src/helper');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

function writeHtml() {
    const data = helper.generateHtml();
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
        }
    })
}

//team manager’s name, employee ID, email address, and office number
function init() { //initializes the application with prompts about the manager to start
    console.log("Team Info Generator!");
    writeHtml();
    managerInfo();
    return;
}

function addEmployees() { // this loops until user selects finish
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose an Employee to add to your Team: ',
            name: 'userChoice',
            choices: ['Engineer', 'Intern', 'Finish'],
        }
    ])
    .then(res => {
        if (res.userChoice === "Engineer") {
            const data = engineerInfo();
            return data;
        } else if (res.userChoice === 'Intern') {
            const data = internInfo();
            return data;
        } else if (res.userChoice === 'Finish') {
            console.log('All done! Please see newly created HTML file!')
            return res.userChoice;
        }
    })
    .catch(err => console.log(err))
}

function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter Manager's Name: ",
            name: 'Name'
        },
        {
            type: 'input',
            message: "Enter Employee ID: ",
            name: 'Id'
        },
        {
            type: 'input',
            message: "Enter Email address: ",
            name: 'Email'
        },
        {
            type: 'input',
            message: "Enter Office Number: ",
            name: 'Office'
        }
    ])
    .then(res => {
        const data = new Manager(res.Name, res.Id, res.Email, res.Office); 
        //append data to html
        console.log("added Manager!")
        addEmployees(); // presents the option to add employees
    })
    .catch(err => console.log("managerInfo error", err));
}

// engineer’s name, ID, email, and GitHub username
function engineerInfo() {
   inquirer.prompt([
        {
            type: 'input',
            message: "Enter Engineer's name: ",
            name: 'Name'
        },
        {
            type: 'input',
            message: "Enter ID: ",
            name: 'Id'
        },
        {
            type: 'input',
            message: "Enter email: ",
            name: 'Email'
        },
        {
            type: 'input',
            message: "Enter Github username: ",
            name: 'Username'
        }
    ])
    .then(res => {
        const data = new Engineer(res.Name, res.Id, res.Email, res.Username);
        //append data to html file
        console.log("added Engineer!")
        addEmployees();
    })
    .catch(err => console.log("Error in engineerInfo", err))
}
function internInfo() {
   inquirer.prompt([
        {
            type: 'input',
            message: "Enter Intern's name: ",
            name: 'Name'
        },
        {
            type: 'input',
            message: "Enter ID: ",
            name: 'Id'
        },
        {
            type: 'input',
            message: "Enter email: ",
            name: 'Email'
        },
        {
            type: 'input',
            message: "Enter School: ",
            name: 'School'
        }
    ])
    .then(res => {
        const data = new Intern(res.Name, res.Id, res.Email, res.School);
        //append data to html file
        console.log("Added Intern");
        addEmployees();
    })
    .catch(err => console.log("Error in internInfo", err))
}

init();