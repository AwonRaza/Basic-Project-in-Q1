import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import {pk_do,pk_po,pk_eu,pk_di,pk_ri,pk_yu,do_pkr,do_po,do_eu,do_di,do_ri,do_yu,po_do,po_pk,po_eu,po_di,yu_po,po_ri,po_yu,yu_do,yu_eu,yu_di,yu_ri,yu_pk,ri_do,ri_po,ri_eu,ri_di,ri_pk,ri_yu,di_do,di_po,di_pk,di_ri,di_eu,di_yu,eu_do,eu_po,eu_pk,eu_di,eu_ri,eu_yu} from "./fun.js";

console.log(figlet.textSync("CURRENCY CONVERTER"));



let  Currency = await inquirer.prompt([{
    type:"list",
    name:"ucurrency",
    message:"Enter You Currency! ",
    choices:["PKR","DOLLER","POUND","EURO","YUAN","DIRHAM","RIYAL"]

},
{
    type:"list",
    name:"Concurrency",
    message:"Enter Currency In Which You Want To Convert!  ",
    choices:["PKR","DOLLER","POUND","EURO","YUAN","DIRHAM","RIYAL"]
},
{
    type:"number",
    name:"uamount",
    message:"Enter Amount For Convert! "
}])



    if(Currency.ucurrency == "PKR"  &&  Currency.Concurrency == "DOLLER" ){
        pk_do(Currency.uamount);
    

    }else if(Currency.ucurrency == "PKR"  &&  Currency.Concurrency == "POUND" ){
        
        pk_po(Currency.uamount);

    }else if(Currency.ucurrency == "PKR"  &&  Currency.Concurrency == "EURO" ){
        pk_eu(Currency.uamount);
    

    }else if(Currency.ucurrency == "PKR"  &&  Currency.Concurrency == "YUAN" ){
        pk_yu(Currency.uamount);
    

    }else if(Currency.ucurrency == "PKR"  &&  Currency.Concurrency == "DIRHAM" ){
        pk_di(Currency.uamount);
    

    }else if(Currency.ucurrency == "PKR"  &&  Currency.Concurrency == "RIYAL" ){
        pk_ri(Currency.uamount);
    

    }else if(Currency.ucurrency == "DOLLER"  &&  Currency.Concurrency == "PKR" ){
        do_pkr(Currency.uamount);

    }else if(Currency.ucurrency == "DOLLER"  &&  Currency.Concurrency == "POUND" ){
        do_po(Currency.uamount);
    

    }else if(Currency.ucurrency == "DOLLER"  &&  Currency.Concurrency == "EURO" ){
        do_eu(Currency.uamount);
    

    }else if(Currency.ucurrency == "DOLLER"  &&  Currency.Concurrency == "YUAN" ){
        do_yu(Currency.uamount);
    

    }else if(Currency.ucurrency == "DOLLER"  &&  Currency.Concurrency == "DIRHAM" ){
        do_di(Currency.uamount);
    

    }else if(Currency.ucurrency == "DOLLER"  &&  Currency.Concurrency == "RIYAL" ){
        do_ri(Currency.uamount);
    

    }else if(Currency.ucurrency == "POUND"  &&  Currency.Concurrency == "PKR" ){
        po_pk(Currency.uamount);
    

    }else if(Currency.ucurrency == "POUND"  &&  Currency.Concurrency == "DOLLER" ){
        po_do(Currency.uamount);
    

    }else if(Currency.ucurrency == "POUND"  &&  Currency.Concurrency == "EURO" ){
        po_eu(Currency.uamount);
    

    }else if(Currency.ucurrency == "POUND"  &&  Currency.Concurrency == "YUAN" ){
        po_yu(Currency.uamount);
    

    }else if(Currency.ucurrency == "POUND"  &&  Currency.Concurrency == "DIRHAM" ){
        po_di(Currency.uamount);
    

    }else if(Currency.ucurrency == "POUND"  &&  Currency.Concurrency == "RIYAL" ){
        po_ri(Currency.uamount);
    

    }else if(Currency.ucurrency == "EURO"  &&  Currency.Concurrency == "PKR" ){
        eu_pk(Currency.uamount);
    

    }else if(Currency.ucurrency == "EURO"  &&  Currency.Concurrency == "POUND" ){
        eu_po(Currency.uamount);
    

    }else if(Currency.ucurrency == "EURO"  &&  Currency.Concurrency == "DOLLER" ){
        eu_do(Currency.uamount);
    

    }else if(Currency.ucurrency == "EURO"  &&  Currency.Concurrency == "YUAN" ){
        eu_yu(Currency.uamount);
    

    }else if(Currency.ucurrency == "EURO"  &&  Currency.Concurrency == "DIRHAM" ){
        eu_di(Currency.uamount);
    

    }else if(Currency.ucurrency == "EURO"  &&  Currency.Concurrency == "RIYAL" ){
        eu_ri(Currency.uamount);
    

    }else if(Currency.ucurrency == "YUAN"  &&  Currency.Concurrency == "PKR" ){
        yu_pk(Currency.uamount);
    

    }else if(Currency.ucurrency == "YUAN"  &&  Currency.Concurrency == "POUND" ){
        yu_po(Currency.uamount);
    

    }else if(Currency.ucurrency == "YUAN"  &&  Currency.Concurrency == "EURO" ){
        yu_eu(Currency.uamount);

    }else if(Currency.ucurrency == "YUAN"  &&  Currency.Concurrency == "DOLLER" ){
        yu_do(Currency.uamount);

    }else if(Currency.ucurrency == "YUAN"  &&  Currency.Concurrency == "DIRHAM" ){
        yu_di(Currency.uamount);
    

    }else if(Currency.ucurrency == "YUAN"  &&  Currency.Concurrency == "RIYAL" ){
        yu_ri(Currency.uamount);
    

    }else if(Currency.ucurrency == "DIRHAM"  &&  Currency.Concurrency == "PKR" ){
        di_pk(Currency.uamount);
    

    }else if(Currency.ucurrency == "DIRHAM"  &&  Currency.Concurrency == "POUND" ){
        di_po(Currency.uamount);
    

    }else if(Currency.ucurrency == "DIRHAM"  &&  Currency.Concurrency == "EURO" ){
        di_eu(Currency.uamount);
    

    }else if(Currency.ucurrency == "DIRHAM"  &&  Currency.Concurrency == "YUAN" ){
        di_yu(Currency.uamount);
    

    }else if(Currency.ucurrency == "DIRHAM"  &&  Currency.Concurrency == "DOLLER" ){
        di_do(Currency.uamount);
    

    }else if(Currency.ucurrency == "DIRHAM"  &&  Currency.Concurrency == "RIYAL" ){
        di_ri(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "PKR" ){
        di_pk(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "POUND" ){
        ri_po(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "EURO" ){
        ri_eu(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "YUAN" ){
        ri_yu(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "DIRHAM" ){
        ri_di(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "DOLLER" ){
        ri_do(Currency.uamount);
    

    }else if(Currency.ucurrency == "RIYAL"  &&  Currency.Concurrency == "PKR"){

         ri_pk(Currency.uamount);
    }
    
    





