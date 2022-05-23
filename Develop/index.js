const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
//const {writeFile, copyFile} = require(')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project titled?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project's title")
                return false;
            }
        }
    },

    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a project description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process',
    },

    {
        type: 'input',
        name: 'usage',
        message: "What is your project's usage?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter your project's usage")
                return false;
            }
        }
    },
 

    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: 'list',
        name: 'license',
        message: 'What is your project licensed as?',
        choices: ["apache", "GNU", "mit", "mpl-2.0"]
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your project?',
        validate: contributorsInput => {
            if (contributorsInput) {
                return true;
            } else {
                console.log("Please enter contributors to your project")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How did you test your project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter the testing process for your project")
                return false;
            }
        }
        
    },


    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile 
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub url?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub url")
                return false;
            }
        }
    },

    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your email")
                return false;
            }
        }
    }

]; 

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
  
        console.log("Success, file created");
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('./dist/readme.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();

