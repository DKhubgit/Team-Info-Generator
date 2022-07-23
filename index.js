const inquirer = require('inquirer');
const fs = require('fs');
const helper = require('./src/helper');

function writeHtml() {
    const data = helper.generateHtml();
    fs.writeFile('./dist/index.html', data, err => {
        err ? console.log(err) : console.log('Success!')
    } )
}

function init() { //initializes the application with prompts to start
    inquirer.prompt([
        {
            type: 'input',
            message: "Test input: ",
            name: 'UserInput',
        }
    ])
    .then(response => { //gather inputs and pass it in to a generate HTML file function, how can we make CSS File?
        console.log(response.UserInput);
        writeHtml();
    })
    .catch(err => {
        console.log(err);
    })
}

init();