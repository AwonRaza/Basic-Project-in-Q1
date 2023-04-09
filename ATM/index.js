import inquirer from "inquirer";
async function newset() {
    let setpin = await inquirer.prompt([{
            type: "password",
            name: "npin",
            message: "Enter Your New Pin"
        },
        {
            type: "password",
            name: "repin",
            message: "Conform Your Pin"
        }
    ]);
    let { npin, repin } = setpin;
    if (npin == repin) {
        console.log("Your New Pin Saved Succesfully");
    }
    else {
        console.log("Your Pin did not match");
        let checkyn = await inquirer.prompt({
            name: "check",
            type: "input",
            message: "press y for re enter  and n for exit! "
        });
        if (checkyn.check == "y") {
            newset();
        }
    }
}
let pin = 12345;
let check = await inquirer.prompt({
    type: "password",
    name: "userpass",
    message: "Kindaly Enter Your Pin",
});
if (check.userpass == pin) {
    const display = await inquirer.prompt({
        name: "displayopt",
        type: "list",
        choices: ["Cash Widraw", "Check Balance", "Change Pin", "Transction History"]
    });
    if (display.displayopt == "Cash Widraw") {
        let Widrawopt = await inquirer.prompt({
            name: "widraw",
            type: "input",
            message: "Enter Your Payment Like 500 and more!"
        });
        if (Widrawopt.widraw < 500) {
            console.log("invalid payment!");
        }
        else {
            console.log("Happy Transction! ");
        }
    }
    else if (display.displayopt == "Change Pin") {
        newset();
    }
    else if (display.displayopt == "Check Balance") {
        console.log("Your Current Balance is 500000 in pkr and 1780 in $ ");
    }
    else if (display.displayopt == "Transction History") {
        console.log("Download Transaction History");
    }
}
else {
    console.log("your pin did not matc! ");
}
