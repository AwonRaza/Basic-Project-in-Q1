import figlet from "figlet";
import inquirer from "inquirer";
import calfun from "./index.js";
let average = async()=>{
    let user = await inquirer.prompt([

        {
            name:"value1",
            type:"number",
            message:"How mnay Values You Wantg to enter : "
        }
    ])

let val1 = user.value1;
let inputarray:number[]=[];
let add = 0;
let result = 0;


for(let i=0;i<val1;i++){
let uinput= await inquirer.prompt([{
                name:"uin",
                type:"number",
                message:`Kindaly Enter Value ${i+1}`,
            }
                

            ]) 
            

            
            inputarray.push(uinput.uin);
            


            
    

            

        }

        
        for(let a of inputarray){
            
            add += a;
            
        }
        result = add/inputarray.length;
        
        console.log(figlet.textSync(`Average is ${result}`));

        let answ = await inquirer.prompt({
            name:"again",
            type:"input",
            message:"Want another Operation! press y for yes and n for No "
        })
    
        if(answ.again == "y" ){
            calfun();
    
    
        }
        
        


    
     

}

export default average;