#! /usr/bin/env node
import inquirer from "inquirer";
//Cli Guessing Number game.
const num = Math.floor(Math.random() * 6 + 1);
const guessingNumber = await inquirer.prompt([
    {
        message: "please guess a Number between 1-6:",
        type: "number",
        name: "userGuessingNumber",
    },
]);
if (guessingNumber.userGuessingNumber === num) {
    console.log("Congratulations! you guessed rigth Number.");
}
else {
    console.log("Sorry, you guessed wrong Number.");
}
