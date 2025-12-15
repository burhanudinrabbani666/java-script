"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// if we are not use strict mode this bug is not detected
// and code its just running but nothing nformation about that
if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log(`I can Drive`);

// const interface = "Audio";
// const private = 534;
// const if =23

// Function

function logger() {
  console.log("Hello World");
}

logger();

function fruitProccesor(apples, oranges) {
  const juice = `Juice with ${apples} apple and ${oranges} oranges`;

  return juice;
}

const appleJuice = fruitProccesor(3, 7);
console.log(appleJuice);

// Declaration Vs Expressions

//Declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

// save value function to variable
const baniAge = calcAge1(2002);
console.log(`${baniAge} Years Old`);

// Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(2000);
console.log(`${age2} Years Old`);
*/

// Expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

// Arrow Function ES6
const calcAge3 = (birthYear) => 2025 - birthYear;

const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;

  // return retirement;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "Bani"));
console.log(yearsUntilRetirement(2001, "Nico"));
