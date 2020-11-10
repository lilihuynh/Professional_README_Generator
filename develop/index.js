const inquirer = require("inquirer");
const fs = require('fs');

const init = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your Project Name?',
    },
    {
      type: 'input',
      name: 'githubUser',
      message: 'What is you Github user name?',
    },
    {
      type: 'input',
      name: 'GithubPage',
      message: 'What is your Github page link?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage intruction',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What does the user need to know about contributing to the repo?',
    },
    {
      type: "checkbox",
      name: "license",
      message: "What kind of license should your project have?",
      choices: [
        "MIT",
        "APACHE 2.0",
        "GP 3.0",
        "BSD 3",
        "None"
      ]
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Contact: Full Name - email address',
    },
    {
      default: 'npm i',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
    },
    {
      default: 'npm test',
      name: 'test',
      message: 'What command should be run to run tests?',
    },

  ]).then((answers) => {
    console.log(answers);

    const ReadmeString =
      `# ${answers.name}
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
    
## Description

${answers.description}

## Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Test](#test)
  * [Contact](#contact)
    
## Installation
    
To install necessary dependencies, run the following command:

${answers.dependencies}
  
## Usage
    
${answers.usage}
    
## Contributing
    
${answers.contribute}
    
## License
    
${answers.license}

## Test

To run tests, run the following command:

${answers.test}


## Contact
If you have any questions about the repo, please open an issue or contact me directly at ${answers.contact}.
You can find more of my work at [${answers.githubUser}] (${answers.GithubPage}).`

    fs.writeFile("generatedREADME.md", ReadmeString, err => {
      if (err) console.log(err)
    })
  });

// function call to initialize program
init();
