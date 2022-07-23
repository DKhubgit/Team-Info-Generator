const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, username) {

        super(name, id, email)
        this.username = username;

    }

    getGitub() {
        return `https://github.com/${this.username}`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;