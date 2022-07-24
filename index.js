const inquirer = require('inquirer');
const fs = require('fs');
const helper = require('./src/helper');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var managerStr = '';
var engineerStr = '';
var internStr = '';

function writeHtml(managerStr, engineerStr, internStr) {
    const data = helper.generateHtml(managerStr, engineerStr, internStr);
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
        }
    })
}

async function init() { //initializes the application with prompts
    console.log("Team Info Generator!");
    managerStr = managerStr + await managerInfo();
    console.log("Successfully added Manager!");
    let add = true;
    let string = [];
    while (add) {
        string = await inquirer.prompt([
            {
                type: 'list',
                message: 'Please choose an Employee to add to your Team: ',
                name: 'userChoice',
                choices: ['Engineer', 'Intern', 'Finish!'],
            }
        ])
        .then(res => {
            return res.userChoice;
        })
        .catch(err => console.log(err))
        
       if(string === "Engineer") {
        engineerStr = engineerStr + await engineerInfo();
        console.log("Successfully added Engineer!")
       } else if (string === "Intern") {
        internStr = internStr + await internInfo();
        console.log("Successfully added Intern!");
       } else if (string === 'Finish!') {
        add = false;
       }
    }
    writeHtml(managerStr, engineerStr, internStr);
    return;
}

function managerInfo() {
    return inquirer.prompt([
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
        return helper.managerCard(data);
    })
    .catch(err => console.log("managerInfo error", err));
}

// engineer’s name, ID, email, and GitHub username
function engineerInfo() {
   return inquirer.prompt([
        {
            type: 'input',
            message: "Enter Engineer's name: ",
            name: 'Name'
        },
        {
            type: 'input',
            message: "Enter Employee ID: ",
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
        return helper.engineerCard(data);
    })
    .catch(err => console.log("Error in engineerInfo", err))
}
function internInfo() {
   return inquirer.prompt([
        {
            type: 'input',
            message: "Enter Intern's name: ",
            name: 'Name'
        },
        {
            type: 'input',
            message: "Enter Employee ID: ",
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
        return helper.internCard(data);
    })
    .catch(err => console.log("Error in internInfo", err))
}

init();