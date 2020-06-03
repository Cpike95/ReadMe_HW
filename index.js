const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

getData();

async function getData() {
   try {
     await inquirer.prompt([
        {
            type: "input",
            message: "Project title:",
            name: "title"
        },
        {
            type: "input",
            message: "Provide a short description of the project:",
            name: "description"
        },
        {
            type: "input",
            message: "Table of Contents:",
            name: "tableofContents"
        },
        {
            type: "input",
            message: "Installation directions:",
            name: "instalation"
        },

        {
            type: "input",
            message: "Usage:",
            name: "usage"
        },
        {
            type: "input",
            message: "Contributing:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Tests: ",
            name: "tests"
        },
        {
            type: "input",
            message: "Questions:",
            name: "questions"
        },  
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        },    

        ]).then(async function (data) {
   
    // using axios to take into the github users accountgrabing the name, url
    const github =  await axios.get(
        `https://api.github.com/users/${data.username}`,
    );
    const githubLink = github.data.url;
    const githubEmail = github.data.email; 
// making the README file with the users reponses from the cmnd line.

    const answrs = 
    `
# ${data.title}
## Desctipion
${data.description}
## Table of Contents
* ${data.tableofContents}
## Instalation
${data.instalation}  
## Usage 
${data.usage}   

## Tests
${data.tests}
## Conributions
${data.contributing}
## Quesitons
${data.questions}

* Github user name: ${data.username}

* Email me at : ${githubEmail}

* Link to Github: ${githubLink}
    `
    ;

    fs.writeFile("README.md", answrs, function(err) {
        if (err) {
          throw err;
        }
        console.log(`Your README is saved `);
      });
    });

   }catch (err) {
       console.log(err);
   }
}

