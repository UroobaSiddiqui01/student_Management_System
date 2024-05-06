#!/use/bin/env node
import chalk from "chalk";

import inquirer from "inquirer";
// import { inflateRawSync } from "zlib";
console.log(
    chalk.blue(" \n\t***********WELOCME TO STUDANT MANAGMINT SYSTEM**********\n")
);
interface studant{
    name:string;
};

let studants: studant[] = [{ name:"urooba"},{name: "siddiqui"}];
let teachers = [
    { name: "Miss FATIMA", experience: 3, school: " Sindh public" },
  ];

let courses = ["Digital Marketing", "Artificial intelligence"];
let newStudants: studant[] = []; // array to store new studants.

async function main(studant: studant[]){
    do {
        const check = await inquirer.prompt({
            name:"check2",
            type:"list",
            message:chalk.cyan("what do you want to do?"),
            choices:["Log In" , "create new studant" ,"Exit"]
        });

        if(check.check2 === "Log In") {
            const check3 = await inquirer.prompt({
                name:"check4",
                type:"input",
                message:chalk.cyan("Enter name:"),
            });
            const enteredName = check3.check4;
            const isNameValidExisting = studant.some(
                (studant) => studant.name === enteredName
            );
            const isNameValidNew = newStudants.some(
                (studant) => studant.name === enteredName
            );

            if(isNameValidExisting || isNameValidNew){
                console.log(chalk.gray("Log in successful!"));
                const todo = await inquirer.prompt({
                    name:"q1",
                    type:"list",
                    message:chalk.magenta("what do you want to do?"),
                    choices:["View Teacher" , "View courses" , "View Students"],
                });

                if (todo.q1 === "View Teacher") {
                    console.log(teachers);
                  }
          
          
                if(todo.q1 === "View courses"){
                    console.log(courses);
                
            }
            if(todo.q1 === "View students"){
                console.log(studants.concat(newStudants));
        }
    }else{
        console.log(chalk.redBright("invalid name"));
    }
}
if(check.ckeck2 === "creat new studant"){
    let newStudant = await inquirer.prompt({
        type:"input",
        name:"newStudantName",
        message:chalk.cyan("Enter your name:"),
    });
    //create a new student object
    const newStudantobject: studant ={ name: newStudant.newStudantName}

    //puch the new studant to the newStudants array
    newStudants.push(newStudantobject);

    console.log(chalk.magentaBright("New student added!"));
}
if(check.check2 === "Exit")
    {
    console.log(chalk.greenBright("Exiting tha program."));
    console.log(
        chalk.yellow( 
           " \n\t*********  THANKS FOR USING A STUDANT MANAGEMENT SYSTEM   *********\n"
        )
    );
    break; //Exit tha loop
}
    }
    while (true);
}

main(studants);