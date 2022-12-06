//Declaring req's for application packages.
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

//Function to write the user's input to the index.html file and notify the user that the team profile was successfuly created, or unsuccessful if an error occurs.
function writeFile(fileName, data){
    fs.writeFile(fileName, generateHTML(data),(err)=>
    err ? console.log(err) : console.log('Team Profile created!'))
}
//I started off including all questions within the prompt, but later decided to seperate them in seperate arrays according to employee type in order to not have to repeat code when the user chooses another employee to add.
const managerQuestions = [
    {
        type: 'input',
        name: 'mgrName',
        message: 'Please enter the name of your Manager: '
    },
    {
        type: 'input',
        name: 'mgrID',
        message: `Please enter your Manager's employee ID: `
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: `Please enter your Manager's email address: `
    },
    {
        type: 'input',
        name: 'mgrOffice',
        message: `Please enter your Manager's office number: `
    }
];

const engineerQuestions = [        
    {
        type:'input',
        name: 'engName',
        message: 'Please enter the name of your engineer.',
        when(input){
            return input.addEmployee === "Engineer" || input.addLastEmployee === "Engineer";
        }
 
    },
    {
        type:'input',
        name: 'engID',
        message: 'Please enter the ID of your engineer.',
        when(input){
            return input.addEmployee === "Engineer" || input.addLastEmployee === "Engineer";
        }

    },
    {
        type:'input',
        name: 'engEmail',
        message: 'Please enter the email of your engineer.',
        when(input){
            return input.addEmployee === "Engineer" || input.addLastEmployee === "Engineer";
        }
 
    },
    {
        type:'input',
        name: 'engGithub',
        message: 'Please enter the GitHub of your engineer.',
        when(input){
            return input.addEmployee === "Engineer" || input.addLastEmployee === "Engineer";
        }

    }
];

    const internQuestions =[        
    {
        type:'input',
        name: 'intName',
        message: 'Please enter the name of your intern.',
        when(input){
            return input.addEmployee === "Intern" || input.addLastEmployee === "Intern";
        }

    },
    {
        type:'input',
        name: 'intID',
        message: 'Please enter the ID of your intern.',
        when(input){
            return input.addEmployee === "Intern" || input.addLastEmployee === "Intern";
        }

    },
    {
        type:'input',
        name: 'intEmail',
        message: 'Please enter the email of your intern.',
        when(input){
            return input.addEmployee === "Intern" || input.addLastEmployee === "Intern";
        }

    },
    {
        type:'input',
        name: 'intSchool',
        message: 'Please enter the college/University that your intern graduated from.',
        when(input){
            return input.addEmployee === "Intern" || input.addLastEmployee === "Intern";
        }

    }
];
const eng2Questions = [
    {
        type: 'input',
        name: 'engName2',
        message: 'Please enter the name of your second engineer.',
        when(input){
            return input.addEngineer === true
        }
    },
    {
        type: 'input',
        name: 'engID2',
        message: 'Please enter the ID of your second engineer.',
        when(input){
            return input.addEngineer === true
        }
    },
    {
        type: 'input',
        name: 'engEmail2',
        message: 'Please enter the email of your second engineer.',
        when(input){
            return input.addEngineer === true
        }
    },
    {
        type: 'input',
        name: 'engGithub2',
        message: 'Please enter the GitHub profile of your second engineer.',
        when(input){
            return input.addEngineer === true
        }
    }
]
//Init function to run the inquirer prompt and gather user input.
function init(){
    inquirer
    .prompt([
        managerQuestions[0],
        managerQuestions[1],
        managerQuestions[2],
        managerQuestions[3],
        {
            type:'list',
            name: 'addEmployee',
            message:'Please select if you would like to add an engineer or an intern to your team.',
            choices: ["Engineer", "Intern", "Finish Team Setup"],
            default: "Finish Team Setup"
        },
        engineerQuestions[0],
        engineerQuestions[1],
        engineerQuestions[2],
        engineerQuestions[3],
        internQuestions[0],
        internQuestions[1],
        internQuestions[2],
        internQuestions[3],
        {
            type: 'confirm',
            name: 'addEngineer',
            message: "Would you like to add another engineer?",
            when(input){
                return  input.addEmployee === "Engineer";
            }
        },
        eng2Questions[0],
        eng2Questions[1],
        eng2Questions[2],
        eng2Questions[3],
        {
            type:'list',
            name: 'addLastEmployee',
            message: function(input){
                if(input.addEmployee === "Engineer"){
                    return "Please select if you would like to add an intern to your team."
                }
                else{
                    return "Please select if you would like to add an engineer to your team."
                }
            },
            choices: function(input){
                if(input.addEmployee === "Engineer"){
                    return ["Intern", "Finish Team Setup"];
                }
                if(input.addEmployee === "Intern"){
                    return ["Engineer", "Finish Team Setup"];
                }
            },
            default: "Finish Team Setup",
            when(input){
                return input.addEmployee !== "Finish Team Setup";
            }
        },
        //Since the prompt method is iterating through the array of questions passed, even though the conditional statement within these questions is met, they need to be re-passed through to show up again.
        //Tried to avoid this but I couldn't think of a way to circumvent it.
        engineerQuestions[0],
        engineerQuestions[1],
        engineerQuestions[2],
        engineerQuestions[3],
        internQuestions[0],
        internQuestions[1],
        internQuestions[2],
        internQuestions[3],
        {
            type: 'confirm',
            name: 'addEngineer',
            message: "Would you like to add another engineer?",
            when(input){
                return  input.addLastEmployee === "Engineer";
            }
        },
        eng2Questions[0],
        eng2Questions[1],
        eng2Questions[2],
        eng2Questions[3]
    ])
        
    .then((answers)=>{
        console.log(answers);
        writeFile('./dist/index.html', answers);
    })

    
}


init();
