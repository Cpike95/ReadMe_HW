const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([

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
        type: "list",
        message: "Select a Liscence:",
        name: "liscence",
        choices: ['hey', 'bud']
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
// title, description, tableofContents, instalation, liscence, usage, contributing, tests, questions
    ])
  .then(function writeToFile(data) {
 // making variables for the users reponses from the cmnd line.
    const answrs = `
# ${data.title}
## Desctipion
${data.description}
## Table of Contents
* ${data.tableofContents}
## Istalation
${data.instalation}  
## Usage 
${data.usage}   
## Liscence
${data.liscence}
## Tests
${data.tests}
## Conributions
${data.contributing}
## Quesitons
${data.questions}
        `
    ;

     
    console.log(answrs);
        // const inputs = answrs.join("\n");
    
    fs.writeFile("README.md", answrs, function(err) {
        if (err) {
          throw err;
        }
        console.log(`Your README is saved `);
      });


    const queryUrl = `https://api.github.com/users/${data.username}/repos?per_page=100`;
   
    // //currently taking in the resp data and writing it to the README.md file using the query url to get the users repo
    axios.get(queryUrl).then(function(res) {
            
        
        
            // repoStr

    });
  });



// console.log(writeToFile());
// function init() {


// init();
