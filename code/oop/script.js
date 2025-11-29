"use strict";
/*
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

console.log(bani.__proto__);
// Obect.prototype (top of prototype)
console.log(bani.__proto__.__proto__);
console.log(bani.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor); // Person
console.dir(Person.prototype.constructor); // Person

const arr = [1, 2, 3, 3, 2, 5, 1, 5, 3, 5]; // New Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // Not Good Idea

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed += 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
*/

// ES6 Classes

//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, BirthYear) {
    this.fullName = fullName;
    this.BirthYear = BirthYear;
  }

  // will be prototype of the object
  clacAge() {
    console.log(2025 - this.BirthYear);
  }

  greeting() {
    console.log(`Hi ${this.firstName}`);
  }

  get age() {
    return 2025 - this.BirthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }

  get fullName() {
    return this._fullName;
  }
}

const cicih = new PersonCl("Cicih Rosmawati", 2001);
console.log(cicih);
cicih.clacAge();
console.log(cicih.age); // use get
cicih.greeting();

console.log(cicih.__proto__ === PersonCl.prototype);

// 1. Class are NOT hoisted
// 2. Class are first-class citizen
// 3. Class are executed in strict mode

const bani = new PersonCl("Burhanudin Rabbani", 2002);

//
const account = {
  owner: "Jonas",
  movements: [200, 300, 120, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // get latest

account.latest = 250; // set latest
console.log(account.movements);
