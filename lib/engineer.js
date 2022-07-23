const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, username) {

        super(name, id, email)
        this.username = username;

    }

    getGitub() {

    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;