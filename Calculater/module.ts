import figlet from "figlet";
import inquirer from "inquirer";
import calfun from "./index.js";
let module = async ()=>{
    let user = await inquirer.prompt([

        {
            name:"value1",
            type:"number",
            message:"Enter First Number: "
            
        
        
        
        
        
        },{
            name:"value2",
            type:"number",
            message:"Enter Second Number: "
        
        }])
        let val1 = user.value1;
        let val2 = user.value2;

    let result = val1 % val2;
    console.log(figlet.textSync(` Modolus of ${val1} and ${val2}  =  ${result}`));

    let answ = await inquirer.prompt({
        name:"again",
        type:"input",
        message:"Want another Operation! press y for yes and n for No "
    })

    if(answ.again == "y" ){
        calfun();


    }

}
export default module;