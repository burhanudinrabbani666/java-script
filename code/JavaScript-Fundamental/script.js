/*
console.log("jonas"); // Jonas is valeu
console.log(21); // 21 is valeu

// Declarative Variable
var Greeting = "Hello,";
let firstName = "Burhanudin";
const lastName = "Rabbani";

console.log(Greeting, firstName, lastName); // Hello, Burhanudin Rabbani

const javaScriptIsFun = true;
console.log(javaScriptIsFun); // true

// Check Type of Data Types
console.log(typeof "Burhanudin Rabbani"); // String
console.log(typeof 1411); // Number
console.log(typeof true); // Boolean
console.log(typeof { firsName: "Burhanudin" }); // Object

const now = 2025;
const ageBani = now - 2002;
const ageAisa = now - 2000;

console.log(ageBani > ageAisa); // False
*/

const markWeight = 78;
const markHeight = 1.69;
const jhonWeight = 92;
const jhonHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);
const jhonBMI = jhonWeight / (jhonHeight * jhonHeight);

const markHigherBMI = markBMI > jhonBMI;

console.log(markBMI);
console.log(jhonBMI);
console.log(markHigherBMI);
