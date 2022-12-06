const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Engineer = require('../lib/engineer');



function createEmployeeProfile(employee){
    if(employee.name === undefined){
        return "";
    }
    else{
        let uniqueInfo;
        if(employee.school){
            uniqueInfo = `Graduated from: ${employee.school}`;
        }
        if(employee.github){
            uniqueInfo = `GitHub Profile: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`;
        }
        if(employee.officeNumber){
            uniqueInfo = `Office Number: ${employee.officeNumber}`;
        }
        return `    
        <div class="employee">
            <h1>
                ${employee.name}
            </h1>
            <h2>
                ${employee.getRole()}
            </h2>
            <div class="employeeInfo">
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="${employee.email}">${employee.email}</a></p>
                <p>${uniqueInfo}</p>
            </div>
        </div>`
    }
}

function generateHTML(data){
    const manager = new Manager(data.mgrName, data.mgrID, data.mgrEmail, data.mgrOffice);
    const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.engGithub);
    const eng2 = new Engineer(data.engName2,data.engID2,data.engEmail2,data.engGithub2)
    const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool);

    
    const mngProf = createEmployeeProfile(manager);
    const engProf = createEmployeeProfile(engineer);
    const engProf2 = createEmployeeProfile(eng2);
    const intProf = createEmployeeProfile(intern);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>My Team</header>
        <main>
            <div class="main-container">
                ${mngProf}
                ${engProf}
                ${engProf2}
                ${intProf}
            </div>
        </main>
    </body>
    </html>`
}

module.exports = generateHTML;