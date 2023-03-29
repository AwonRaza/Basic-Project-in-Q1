import inquirer from "inquirer";
let prompt = await inquirer.prompt([{
        name: "value1",
        type: "number",
        message: "Enter First Number: "
    },
    {
        name: "value2",
        type: "number",
        message: "Enter Second Number: "
    }, {
        name: "operator",
        type: "list",
        message: "Enter your Operter",
        choices: ["+", "-", "*", "**", "/", "%"]
    }]);
if (prompt.operator == "+") {
    let result = prompt.value1 + prompt.value2;
    console.log(result);
}
else if (prompt.operator == "*") {
    let result = prompt.value1 * prompt.value2;
    console.log(result);
}
else if (prompt.operator == "-") {
    let result = prompt.value1 - prompt.value2;
    console.log(result);
}
else if (prompt.operator == "/") {
    let result = prompt.value1 / prompt.value2;
    console.log(result);
}
else if (prompt.operator == "%") {
    let result = prompt.value1 % prompt.value2;
    console.log(result);
}
else if (prompt.operator == "**") {
    let result = prompt.value1 ** prompt.value2;
    console.log(result);
}
else {
    console.log("unexcpeted operator found! ");
}
