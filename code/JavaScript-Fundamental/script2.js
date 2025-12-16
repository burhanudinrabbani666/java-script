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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProccesor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;

  return juice;
}

console.log(fruitProccesor(2, 3));
// Juice with 8 pieces of apple and 12 pieces of oranges

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const calcRetirement = function (age) {
  return 65 - age;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  }

  if (retirement < 0) {
    return `${firstName} is already retirement`;
  }
};

console.log(yearsUntilRetirement(1999, "Aziz"));
console.log(yearsUntilRetirement(1950, "Farhan"));

// const friend1 = "aziz";
// const friend2 = "risaldi";
// const friend3 = "farhan";

const friends = ["aziz", "risaldi", "farhan"];
const year = new Array(2000, 2001, 2002);

console.log(friends); // ["aziz", "risaldi", "farhan"]
console.log(friends[0]); // aziz
console.log(friends[2]); // farhan

console.log(friends.length); // 3

// Get Last value
console.log(friends[friends.length - 1]); // farhan

friends[2] = "Khan";
console.log(friends);

// save different value
const firstName = `Jonas`;
const LastName = `Schedmant`;

const jonas = [firstName, LastName, 2025 - 1991, friends];

console.log(jonas);
console.log(jonas.length);

// Exercies

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const years = [1999, 1990, 2001, 2005, 2010];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);

const ages = [age1, age2, age3, age4, age5];
console.log(ages);

const friends = ["aziz", "risaldi", "farhan"];

// Add Element
// Push
friends.push(`Rian`);
console.log(friends);
// ['aziz', 'risaldi', 'farhan', 'Rian']

// shift
friends.unshift(`Herri`);
console.log(friends);
// ['Herri', 'aziz', 'risaldi', 'farhan', 'Rian']

// Remove Element
// Pop
friends.pop(); // remove Last Element
console.log(friends);
// ['Herri', 'aziz', 'risaldi', 'farhan']

// Unshift
friends.shift(); // Remove First Elemenet
console.log(friends);
//['aziz', 'risaldi', 'farhan']

// Checking index of element
console.log(friends.indexOf("risaldi")); // 1
console.log(friends.includes(`aziz`)); // true

const seacrName = `juned`;

if (friends.includes(seacrName))
  console.log(`You have friend called ${friends[friends.indexOf(seacrName)]}`);
else console.log(`you dont have name called ${seacrName}`);

// Object

const bani = {
  firstName: "Burhanudin",
  lastName: "Rabbani",
  birthYear: 2002,
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
  job: "unemployed",
  friends: [`Aziz`, `Farhan`, `Risaldi`],
};

console.log(bani.age);
*/

const bani = {
  firstName: "Burhanudin",
  lastName: "Rabbani",
  birthYear: 2002,
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
  job: "unemployed",
  friends: [`Aziz`, `Farhan`, `Risaldi`],
};

console.log(bani);
console.log(bani.lastName);
console.log(bani["firstName"]);

const nameKey = "Name";
console.log(bani[`first` + nameKey]);
console.log(bani[`last` + nameKey]);

const interestedIn = prompt(
  "What do you want to know about bani? choose between: \n firstName, lastName, age, job and friends"
);
//  Use Bracket
if (!bani[interestedIn])
  console.log(`Bani dont have any data about ${interestedIn}`);
else console.log(bani[interestedIn]);

// Add new properti and the value
bani.location = "Indonesia";
bani.instagram = "bbaanii_";

console.log(bani);

console.log(
  `${bani.firstName} has ${bani.friends.length} friends, and his best friend is called ${bani.friends[0]}`
);
