const inquirer = require('inquirer');
const fs = require('fs');
const { create } = require('domain');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is a brief description of this project? Problems it solves, Why you built it, what did you learn?',
    },
    {
        type: 'input',
        name: 'Deployed',
        message: 'Add link to deployed application',
      },
      {
        type: 'input',
        name: 'Github',
        message: 'Add link to Github Repository',
      },    
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project.',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide Instructions/Examples for use. Add Screenshots.',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List any collaborators or references used.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Please select a license.',
        choices: ['MIT','Apache 2.0','GNU GPL 3.0']
      },      
      {
        type: 'input',
        name: 'Contribute',
        message: 'How to contribute to this project.',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Write tests for the application and examples how to run them here',
      },
  ]);
};

function getLicense(License) {
    let badge;
    switch (License) {
        case "MIT":
        badge = { name: "MIT", color: "blue" };
        break;
        case "Apache 2.0":
        badge = { name: "Apache 2.0", color: "green" };
        break;
        case "GNU GPL 3.0":
        badge = { name: "GNU+GPL+3.0", color: "red" };
        break;
    }
    
    return `![License](https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;

};

  // use writeFileSync to create license.md with selected License's legal jargon
// .then((License)=> fs.writeFileSync('LICENSE.md', licenseJargon(License)))


function createLicenseMd(License){
    let x;
    switch(License) {
        case "MIT": {
         x = {choices: "MIT", jargon: "insert MIT legal jargon here"};
        break;}
        case "Apache 2.0": {
        x = {choices: "Apache 2.0", jargon: "insert APACHE legal jargon here"};
        break;}
        case "GNU GPL 3.0": {
        x = {choices: "GNU GPL 3.0", jargon: "insert GNU legal jargon here"};
        break;}      
    }
    return `#${x.choices}  ##${x.jargon}`;
}

// const createLicenseMd = (License) => ({
//   mit: "MIT",
//   apache: "Apache 2.0",
//   gnu: "GNU GPL 3.0",
// })[License]
// const licenseInfo = ['MIT', 'Apache 2.0', 'GNU GPL 3.0'];
// const [test, testing, tested] = licenseInfo
// console.log(test, testing, tested);


function buildLicenseFile() {
    return `${createLicenseMd}`;
};

function buildREADME({ Title, Description, Deployed, Github, Installation, License, Usage, Credits, Contribute, Tests }) {
    return `# ${Title}

  ## Table of Contents  
  1.[Description](#Description)  
  2.[Installation](#Installation)  
  3.[Usage](#Usage)  
  4.[Credits](#Credits)  
  5.[License](#License)  
  6.[Badges](#Badges)  
  7.[Contribute](#Contribute)  
  8.[Tests](#Tests)  

  ## Description  
  ${Description}  
  ## Deployed Application  
  ${Deployed}  
  ## Github Repo  
  ${Github}  
  ## Installation  
  ${Installation}  
  ## Usage  
  ${Usage}  
  ## Credits  
  ${Credits}  
  ## License  
  ${getLicense(License)}
  

  ## Badges  
  ![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=Kovaceva11&show_icons=true)  
  ![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=Kovaceva11&theme=blue-green)  
  ## Contribute  
  ${Contribute}  
  ## Tests  
  ${Tests}  
  
  `;
}






// Bonus using writeFileSync as a promise
function init() {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('README.md', buildREADME(answers)))
        .then((answers) => fs.writeFileSync('LICENSE.md', buildLicenseFile(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
}





init();