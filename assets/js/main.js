// for and while - single line comments
// loop - dongu demekdir

/* 
    multiline comments
*/

// for (let a = 0; a < 100; a++) {
//   console.log(a);
// }

// let b = 0;
// while (b < 100) {
//   console.log(b);
//   b++;
// }

// function logger(error) {
//   // Real implementation is to send errors to backend
//   console.log(error);
// }

// try {
//   const a = 5;
//   a = 10;
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("everything is over");
// }

// try {
//   // fetch user informations from backend
// } catch (err) {
//   logger(err);
// }

// Condition block
// const age = 100;
// if (age > 18) {
//   console.log("you are allowed");
// }

// const str = "STRINGASFAASFASFA";

// if (str.length > 10) {
//   console.log("longer than 10");
// } else if (str.length > 5) {
//   console.log("longer than 5");
// } else {
//   console.log("i dont know the length of the string");
// }

// TERNARY operator
// const result = age > 18 ? "you are allowed" : "you are not allowed";

// const str2 = "MONDAY";
// const result2 = str2 === "MONDAY" ? "it is monday" : "it is not monday";

// let value = "";

// const result3 = value ? "value it is truthy" : "it is falsy";

// const res =
//   age > 18 && age < 36 ? "age is between 18 and 36" : "age is not between";
// console.log(result3);

// if (value) {
//   console.log("value is empty");
// } else {
//   console.log("value is not empty");
// }
// console.log(result);

// const variable = 5;

// variable = 10;

// myFunction();

// console.log(variable);

// for (let i = 0; i < 5; i++) {
//   debugger;
//   console.log(i);
// }

function greet(name) {
  console.log(generateGreetWord(name));
}

function generateGreetWord(name) {
  debugger;
  return "Hello " + name;
}

greet("Elnur");
