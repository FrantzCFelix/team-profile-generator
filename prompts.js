'use strict'

const idArray = [];

module.exports = {
  idArray,

  manager: [
    {
      type: 'input',
      name: 'managerName',
      message: "What is your manager's name?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return "Please enter your manager's name.";
      }
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is your manager's employee id?",
      validate: answer => {
        const valid = answer.match(/^[1-9]\d*$/);
        if (valid) {
            if (idArray.includes(answer)) {
                return 'This employee id is already taken.';
              } else {
                return true;
              }
        }
        return 'Please enter a positive number greater than 0.';
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is your manager's employee email?",
      validate: answer => {
        const valid = answer.match(/\S+@\S+\.\S+/);
        if (valid) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is your manager's office number?",
      validate: answer => {
        const valid = answer.match(/^[1-9]\d*$/);
        if (valid) {
          return true;
        }
        return 'Please enter a positive number greater than 0.';
      }
    }
  ],

  engineer: [
    {
      type: 'input',
      name: 'engineerName',
      message: "What is your engineer's name?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return "Please enter your engineer's name?.";
      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is your engineer's employee id?",
      validate: answer => {
        const valid = answer.match(/^[1-9]\d*$/);
        if (valid) {
          if (idArray.includes(answer)) {
            return 'This employee id is already taken.';
          } else {
            return true;
          }
        }
        return 'Please enter a positive number greater than 0.';
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is your engineer's employee email?",
      validate: answer => {
        const valid = answer.match(/\S+@\S+\.\S+/);
        if (valid) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is your engineer's GitHub username?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return "Please enter your engineer's GitHub username";
      }
    }
  ],

  intern: [
    {
      type: 'input',
      name: 'internName',
      message: "What is your intern's name?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return "Please enter your intern's name";
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is your intern's employee id?",
      validate: answer => {
        const valid = answer.match(/^[1-9]\d*$/);
        if (valid) {
          if (idArray.includes(answer)) {
            return 'This employee id is already taken.';
          } else {
            return true;
          }
        }
        return 'Please enter a positive number greater than 0.';
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is your intern's employee email?",
      validate: answer => {
        const valid = answer.match(/\S+@\S+\.\S+/);
        if (valid) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is your intern's school?",
      validate: answer => {
        if (answer !== '') {
          return true;
        }
        return "Please enter your intern's school";
      }
    }
  ],
  
  choice: [
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do next?',
      choices: [
        'Add an engineer',
        'Add an Intern',
        "I'd like to see my team report please"
      ]
    }
  ]
};
