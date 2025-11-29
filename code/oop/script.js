"use strict";

// arrow function not working ⚠️
// Use Capital for naming Variable
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create method in side a construted method
  // not good for performance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// use new
// 1. New {} is creating
// 2. function is called, this = {}
// 3. {} linked to protoype
// 4. function automatically return {}

const bani = new Person("Bani", 2002);
const nurasia = new Person("Nurasis", 2000);
const nico = new Person("Nico", 2001);

console.log(bani, nurasia, nico);
console.log(bani instanceof Person); // true

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

bani.calcAge();
nurasia.calcAge();
nico.calcAge();

console.log(bani.__proto__);
console.log(bani.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(bani));
console.log(Person.prototype.isPrototypeOf(nurasia));
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo Sapiens";
console.log(bani.species, nurasia.species);

console.log(bani.hasOwnProperty("firstName")); // true
console.log(bani.hasOwnProperty("species")); // false
