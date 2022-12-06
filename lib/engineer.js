const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
const newEmpl = new Engineer("James", "379", "je@gmail.com", "JIOR")
console.log(newEmpl);
module.exports = Engineer;