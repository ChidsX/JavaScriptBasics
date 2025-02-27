console.log ("hello Peter");

// syntax and varaiables

let message = "hello world";
const author = "instructor1";
var count = 0;

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log (sum);
console.log (diff);
console.log(product);
console.log(quotient);
console.log(remainder);

// loops

let letters = ["a","b","c","d","e"]

console.log("loops output")

for (let amount = 0; amount < letters.length; amount++) {
    console.log ("There are",amount,"letters in this list")
}

//looking at conditional arguments

let age = 18;
if (age >= 18) {
    console.log("You are allowed to drink")
}
else if (age<= 10){
    console.log("have milk")
}
else {
    console.log("Stick to the diet coke")
} 

// switch statemen

number = 1

switch(number){
    case 2:
        console.log("the number is 2")
        break
    case 3:
        console.log("the number is 3")
        break
    case 1:
        console.log("the number is one")
        break
}