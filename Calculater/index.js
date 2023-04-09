#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import figlet from "figlet";
import sum from "./add.js";
import average from "./average.js";
import percentage from "./percentage.js";
import subtract from "./subtract.js";
import multi from "./multiply.js";
import divided from "./divided.js";
import module from "./module.js";
import power from "./power.js";
console.log(figlet.textSync("CALCULATOR"));
let chaani = chalkanimation.rainbow("Developed by Aoun Raza");
chaani.start();
chaani.stop();
let calfun = async () => {
    let prompt = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "Choose Opertaion",
            choices: ["Addition", "Subtraction", "Multiplycation", "PowerOf", "Division", "Modolus", "Average", "Percentage", "Other"]
        }]);
    if (prompt.operator == "Addition") {
        sum();
    }
    else if (prompt.operator == "Multiplycation") {
        multi();
    }
    else if (prompt.operator == "Subtraction") {
        subtract();
    }
    else if (prompt.operator == "Division") {
        divided();
    }
    else if (prompt.operator == "Modolus") {
        module();
    }
    else if (prompt.operator == "PowerOf") {
        power();
    }
    else if (prompt.operator == "Average") {
        average();
    }
    else if (prompt.operator == "Percentage") {
        percentage();
    }
    else {
        console.log(chalk.bgGreen("No Other Operation Found we Will update Soon: "));
    }
};
calfun();
export default calfun;
