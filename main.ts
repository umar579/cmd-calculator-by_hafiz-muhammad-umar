#! /usr/bin/env node
import inquirer from "inquirer";
let userData = await inquirer.prompt([
    {name:"number1",type:"number",message:"enter your first number?"},
    {name:"number2",type:'number',message:"enter your second number?"},
    {name:"operator",type:"list",message:"select one of the oepertaion to perform action?",choices:["Addition","Subtraction","Multiplication","Division","Modulous","Exponentiation"]}
])
if(userData.operator === "Addition"){
    console.log(`Your value is: ${userData.number1 + userData.number2}`);
}else if(userData.operator === "Subtraction"){
    console.log(`Your value is: ${userData.number1 - userData.number2}`);
}else if(userData.operator === "Multiplication"){
    console.log(`Your value is: ${userData.number1 * userData.number2}`);
}else if(userData.operator === "Division"){
    console.log(`Your value is: ${userData.number1 / userData.number2}`);
}else if(userData.operator === "Modulous"){
    console.log(`Your value is: ${userData.number1 % userData.number2}`);
}else if(userData.operator === "Exponentiation") {
    console.log(`Your value is: ${userData.number1 ** userData.number2}`);
}else{
    console.log("Please Select A Valid Operator!");
    
};