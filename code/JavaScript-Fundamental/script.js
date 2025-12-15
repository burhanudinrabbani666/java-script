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

const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2025;

// Template Literals
const jonas = `I'm ${firstName} a ${year - birthYear} years old ${job}`; // I'm jonas a 34 years old teacher

console.log(jonas);

// If else
const age = 15;
const isOldEnough = age >= 18; // false

// Control structed
if (isOldEnough) console.log("sarah can start driving license 🚗");
else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} Years ⚠️`);
}

const birthYear = 2002;
let century;

if (birthYear <= 1000) century = "20th Century";
else century = "21th Century";

console.log(`he is birth in ${century}`);

const inputYear = "2002";

console.log(inputYear + 10); //200210 not 2012
console.log(Number(inputYear) + 10); // 2012

console.log(Number("jonas")); // NaN
console.log(typeof NaN); // number

console.log(String(23)); // "23"

// Type Coercion
console.log(`I am ` + 23 + ` Years Old`); // I am 23 Years Old
console.log("23" - "10" - 3);
console.log("23" * "10"); //230

let n = "1" + 1; // "11"
n = n - 1; // 11 -1

console.log(n); // 10

console.log(Boolean(0)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean(null)); // False
console.log(Boolean("")); // False
console.log(Boolean(NaN)); // False
console.log(Boolean({})); // true
console.log(Boolean([]));   // true


const money = 0; // falsy value
j
if (money) console.log("Don't speend it All"); // executed when truthy value
if (money === 0) console.log("Your money is 0");
else console.log("You Should get a Job");

// --------------------------------------- //

// Equality operator
const age = 10;
if (age === 10) console.log("You just becoming an Adult :D");

// Equality
console.log(age == "10"); // true

// Strict Equality
console.log(age === "10"); // False

// ----------------------------------------- //
// Boolean Logic

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

// if (hasDriverLicense && hasGoodVision) {
//   // false
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should Drive... ");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired); // true

if (hasDriverLicense && hasGoodVision && !isTired)
  console.log("Sarah is able to drive!");
else console.log("Someone else should Drive... ");
console.log(2 % 3);

let results = [];
const fizz = "fizz";
const buzz = "buzz";
const fizzBuzz = "fizz-buzz";

for (let index = 1; index <= 100; index++) {
  results = [...results, index];
}

const Task = results.map((result) => {
  if (result % 3 === 0 && result % 5 === 0) {
    return fizzBuzz;
  } else if (result % 5 === 0) {
    return buzz;
  } else if (result % 3 === 0) {
    return fizz;
  } else {
    return result;
  }
});

console.log(`${Task.join(", ")}.`);
*/

// Switch Statement

const day = "thursday";

switch (day) {
  // day === "monday"
  case "monday":
    console.log("Plan Courses structure");
    console.log("Go to coding meetup");
    break; // To stop the code

  case "tuesday":
    console.log("Perpare My video");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("record Videos");
    break;

  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;

  default:
    console.log("Not A valid day");
}

if (day === "monday") {
  console.log("Plan Courses structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Perpare My video");
} else if (day === "wednesday" || "thursday") {
  console.log("write exm videos");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("not a valid day");
}
