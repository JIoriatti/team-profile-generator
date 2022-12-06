const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');




function generateHTML(data){
    const manager = new Manager(data.mgrName, data.mgrID, data.mgrEmail, data.mgrOffice);
    const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.engGithub);
    const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool);

    
}
