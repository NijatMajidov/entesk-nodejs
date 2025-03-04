import chalk from 'chalk';
import validator from 'validator';
import getNotes from "./notes.js";

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail("salam@email.com"));

const greenMsg = chalk.bold.green.bgGreen.italic('Success!');
console.log(greenMsg); 

const command = process.argv[2]
if(command == 'ye'){
    console.log(chalk.italic.green('True'));
}else if(command == "hello"){
    console.log(chalk.yellow('Hello'));
}else{
    console.log(chalk.bold.red('False'));
}

import fs from 'fs';
import GetNotes from './utils.js';

const newmsg = process.argv[3];

async function run() {
    if (!newmsg) {
        console.log(chalk.red("Error: Text not included!"));
        return;
    }

    const data = GetNotes(newmsg);
    console.log(chalk.green("New file content:"));
    console.log(chalk.blue(data));
}

run();