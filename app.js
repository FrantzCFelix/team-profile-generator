'use strict';

const prompts = require('./prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const pageBuilder = require('./lib/htmlGenerator');
const outputPath = path.resolve(__dirname, 'output', 'team.html');

const teamMembers = [];
let htmlCards = '';



async function Main() {
  console.log('Please build your team');
  const answers =  await inquirer.prompt(prompts.manager);

  const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNumber
  );
  teamMembers.push(manager);
  prompts.idArray.push(answers.managerId);
  await buildTeam();
}

async function buildTeam() {
  try {
    const nextStep =  await inquirer.prompt(prompts.choice);
    switch (nextStep.choice) {
      case 'Add an engineer':
        await addEngineer();
        break;
      case 'Add an Intern':
        await addIntern();
        break;
      default:
        generateReport();
    }
  } catch (err) {
    console.error('buildTeam error', err);
  }
}

async function addEngineer() {
  const answers = await inquirer.prompt(prompts.engineer);
  const engineer = new Engineer(
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.engineerGithub
  );
  teamMembers.push(engineer);
  prompts.idArray.push(answers.engineerId);
  buildTeam();
}

async function addIntern() {
  try {
    const answers = await inquirer.prompt(prompts.intern);
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(intern);
    prompts.idArray.push(answers.internId);
    buildTeam();
  } catch (err) {
    console.error(err);
  }
}

function generateReport() {
    for (let i = 0; i < teamMembers.length; i++) {
       htmlCards = `${htmlCards}${pageBuilder.generateCard(teamMembers[i])}`;
    }
    let finalHTML = pageBuilder.generateHtml(htmlCards)
    console.log(teamMembers);
  fs.writeFile(outputPath, finalHTML, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Team Profile Generated!');
    }
  });
}

Main();




