// const age = 18;

// if (age > 18) {
//   console.log("this person is allowed");
// } else {
//   console.log("this person is not allowed");
// }

// const age2 = 25;

// if (age2 > 25) {
//   console.log("this person is over 25");
// } else {
//   console.log("this person is under 25");
// }

function checkAge(age, comparableAge) {
  if (age >= comparableAge) {
    return true;
  }
  return false;
}

// if (checkAge(16, 18)) {
//   console.log("You are allowed");
// } else {
//   console.log("You are not allowed");
// }

checkAge(16, 18)
  ? console.log("You are allowed")
  : console.log("You are not allowed");

checkAge(30, 25)
  ? console.log("hello the person your age is greater than 25")
  : console.log("sorry bro you are under 25");

// function myFunc(num1 = 0, num2 = 0, num3 = 0) {
//   if (
//     typeof num1 === "string" ||
//     typeof num2 === "string" ||
//     typeof num3 === "string"
//   ) {
//     return "One of the arguments which provied is not number ";
//   } else {
//     return num1 + num2 + num3;
//   }
// }

// myFunc(5, 6);

// myFunc("salam", "10", 10);

// regular function

// console.log(findMax(-12341, -31, -125124, -124142, -124123));

// function findMax(num1, num2, num3, num4, num5) {
//   let maxOfNumbers = arguments[0];

//   for (let i = 1; i < arguments.length; i++) {
//     const element = arguments[i];
//     if (element > maxOfNumbers) {
//       maxOfNumbers = element;
//     }
//   }

//   return maxOfNumbers;
// }

// ES6 - Ecmascript 6 - 2015
// Arrow functions, fat arrow functions
/*
    1. Arrow functions do not have arguments object
    2. this keyword usage
    3. regular functions can be accessed before initializing
       because `function` keywords are hoisted but arrow functions can not be accessed
*/

const multiplier = (a, b) => {
    return a * b;
} 

const logger = str => console.log(str);
const summer = (a = 0, b = 0) => a + b;

logger("Salam dunya");
