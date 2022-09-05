const path = require ("path");
const fs = require ("fs");
const inquirer = require ("inquirer");
const readmegen = require ("./utils/readmegen")


inquirer.prompt ([
    {
        type:"input",
        name: "name",
        message: "what is the name of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "what license are you using?",
        choices: ["MIT","GPL","Apache 2.0"]
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the intended use for this project?"
    },
    {
        type: "input",
        name: "gitusername",
        message: "Enter your GitHub user name:",
        validate: (answer)=>{
            if(answer!==""){
                return true
            }
            return "GitHub user name is required"
        }
    },
    {
        type: "input",
        name: "test",
        message: "What is the test for this project?",
        default: "NPM run test"

    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project?",
        default: "Clone this repo and run NPM install"

    }
]).then(answers => {
    fs.writeFileSync(path.join(__dirname,"/examples/","README.md"),readmegen(answers))
})
