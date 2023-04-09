import inquirer from "inquirer";
import calfun from "./index.js";
let percentage = async () => {
    let user = await inquirer.prompt([{
            type: "number",
            name: "obt",
            message: "Enter your Obtain Number",
        },
        {
            type: "number",
            name: "tot",
            message: "Enter your Total Number",
        }]);
    let result = user.obt / user.tot * 100;
    console.log(result);
    let answ = await inquirer.prompt({
        name: "again",
        type: "input",
        message: "Want another Operation! press y for yes and n for No "
    });
    if (answ.again == "y") {
        calfun();
    }
};
export default percentage;
