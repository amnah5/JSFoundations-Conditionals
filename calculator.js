const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const number = prompt("please enter number? ");
const num1 = prompt("please enter the first number");
const num2 = prompt("please enter the first number");
const oper = prompt("please choose the operation:" )

console.log(num1);
console.log(num2);
console.log(oper);

if(!isNaN(num1)&& !isNaN(num2)){
    if(oper === "+"){
        console.log(`${num1} ${oper} ${num2} = ${num1}+${num2}`);
    } else if(oper === "-"){
        console.log(`${num1} ${oper} ${num2} = ${num1}-${num2}`);
    } else if(oper === "*"){
        console.log(`${num1} ${oper} ${num2} = ${num1}*${num2}`);
    } else if(oper === "/"){
        console.log(`${num1} ${oper} ${num2} = ${num1}/${num2}`);

    }else{
        console.log("please enter correct operation")
    }
    } else {
        console.log("invailed numbers")

    }