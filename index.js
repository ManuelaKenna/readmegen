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
        choices: ["MIT","GPL","apache2.0"]
    }
]).then(answers => {
    fs.writeFileSync(path.join(__dirname,"/examples/","README.md"),readmegen(answers))
})