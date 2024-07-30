const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');
const generateSVG = require('./svgGenerator');
let shape;
let data

async function run() {
    const responses = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: input => input.length <= 3 || 'Text must be up to 3 characters long.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color'
        },
    ])

    switch (responses.shape) {
        case 'Circle':
            shape = new Circle(responses.shapeColor);
            break;
        case 'Triangle':
            shape = new Triangle(responses.shapeColor);
            break;
        case 'Square':
            shape = new Square(responses.shapeColor);
            break;
    }
    
    data = generateSVG(responses, shape)
    fs.writeFileSync(`logo.svg`, data)
}

module.exports = run;