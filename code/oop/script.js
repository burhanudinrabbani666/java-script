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

// const bani = new Person("Bani", 2002);
const nurasia = new Person("Nurasis", 2000);
const nico = new Person("Nico", 2001);

// console.log(bani, nurasia, nico);
// console.log(bani instanceof Person); // true

Person.hey = function () {
  console.log("Hey There 😄");
  console.log(this);
};

Person.hey();
// nurasia.hey(); // error ❎

// PROTOTYPES
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

// bani.calcAge();
// nurasia.calcAge();
// nico.calcAge();

// console.log(bani.__proto__);
// console.log(bani.__proto__ === Person.prototype);
//
// console.log(Person.prototype.isPrototypeOf(bani));
// console.log(Person.prototype.isPrototypeOf(nurasia));
// console.log(Person.prototype.isPrototypeOf(Person)); // false
//
// Person.prototype.species = "Homo Sapiens";
// console.log(bani.species, nurasia.species);
//
// console.log(bani.hasOwnProperty("firstName")); // true
// console.log(bani.hasOwnProperty("species")); // false
//
// console.log(bani.__proto__);
// Obect.prototype (top of prototype)
// console.log(bani.__proto__.__proto__);
// console.log(bani.__proto__.__proto__.__proto__);
//
// console.log(Person.prototype.constructor); // Person
// console.dir(Person.prototype.constructor); // Person

const arr = [1, 2, 3, 3, 2, 5, 1, 5, 3, 5]; // New Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // Not Good Idea

// console.log(arr.unique());

const h1 = document.querySelector("h1");
// console.dir((x) => x + 1);

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

// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// mercedes.accelerate();
// mercedes.brake();

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

  // static
  static hey() {
    console.log("hey there 😀");
    console.log(this);
  }
}

const cicih = new PersonCl("Cicih Rosmawati", 2001);
// console.log(cicih);
// cicih.clacAge();
// console.log(cicih.age); // use get
// cicih.greeting();

// console.log(cicih.__proto__ === PersonCl.prototype);

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

// Static

const arrh1 = Array.from(document.querySelectorAll("h1")); // .from is attached to Array constructor only
console.log(arrh1);

// exm : Number.parseFloat() ✅
PersonCl.hey();

// Create Object
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init("sarah", 1999);
// sarah.calcAge();

// Challenge #2

class Car2 {
  constructor(carName, carSpeed) {
    this.carName = carName;
    this.carSpeed = carSpeed;
  }

  accelerate() {
    this.carSpeed += 10;
    console.log(`${this.carName} going at ${this.carSpeed}km/h`);
  }

  break() {
    this.carSpeed -= 5;
    console.log(`${this.carName} going at ${this.carSpeed}km/h`);
  }

  get speedUS() {
    return this.carSpeed / 1.6;
  }

  set speedUS(carSpeed) {
    this.carSpeed = carSpeed * 1.6;
  }
}

const ford = new Car2("Ford", 120);
// console.log(ford);
// ford.accelerate();
// ford.break();
// console.log(ford.speedUS); // get
//
// ford.speedUS = 50;
// console.log(ford);
// console.log(ford.carSpeed);

// Person (parent)
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

// Student(child)
const Student = function (firstName, birthYear, courses) {
  Person.call(this, firstName, birthYear);
  this.courses = courses;
};

Student.prototype = Object.create(Person.prototype); // Inherite Person.protype to Student.prototype

Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and I study ${this.courses}`);
};

const mike = new Student("mike", 2001, "Computer Science");
console.log(mike);
mike.intro();
// mike.calcAge(); // 24 ✅

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// Parents
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

// Child
const evCar = function (make, speed, currentBattery) {
  Car.call(this, make, speed);
  this.charge = currentBattery;
};

// Link the prototype
evCar.prototype = Object.create(Car.prototype);

// 2.
evCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3.
evCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${
      this.charge + "%"
    }`
  );
};

const tesla = new evCar("Tesla", 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();

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

  // static
  static hey() {
    console.log("hey there 😀");
    // console.log(this);
  }
}

class Student extends PersonCl {
  constructor(fullName, BirthYear, course) {
    // Always needs to Happen First
    super(fullName, BirthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi i'm ${this.fullName} and I study ${this.course}`);
  }

  // Overwrite calcAge parent
  clacAge() {
    console.log(
      `I'm ${
        2025 - this.BirthYear
      } Years Old, but as a student I fell more like ${
        2025 - this.BirthYear + 10
      } `
    );
  }
}
const martha = new Student("Martha Jonas", 2002, "Art");
martha.introduce();
martha.clacAge();

// Create Object
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto); // {}

// call init to student
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// call intro to student
StudentProto.introduce = function () {
  console.log(`Hi i'm ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2001, "Law");
jay.introduce();
jay.calcAge();

// Encapsulation: Private Class Fields and Methods

// 1. Public  Fields
// 2. Private Fields
// 3. Public  Methods
// 4. Private Methods
// STATIC version of these 4

class Account {
  // Public Fields
  locale = navigator.language;
  bank = "Bankist";

  // Private Fields // Use #
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movement = [];
    // this.local = navigator.language;

    console.log(`Thanks to opening an account. ${this.owner}`);
  }

  // Private Method
  #approveLoan() {
    // Fake Method
    return true;
  }

  // Public Method (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // return this so can chaining methods
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // return this so can chaining methods
  }

  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this; // return this so can chaining methods
  }

  static test() {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
// acc1.deposit(500);
// acc1.withdraw(233);

acc1
  .deposit(150)
  .withdraw(300)
  .deposit(400)
  .requestLoan(20000)
  .withdraw(400)
  .getMovements(); // place last

console.log(acc1);
// console.log(acc1.#movements); // reference to undeclared private field or method #movements

// console.log(Account.test());

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kmh`);
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmh`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// const EV = function (make, speed, charge) {
//   carCl.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;

//   console.log(
//     `${this.make} is going at ${this.speed} kmh, with charge of ${this.charge}`
//   );
// };

class EV extends carCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(updateCharge) {
    this.#charge = updateCharge;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} kmh, with charge of ${
        this.#charge
      }`
    );
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmh`);
    return this;
  }
}

const rivian = new EV("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate().break().accelerate();
*/

// 03) Function and new operator

// - Using Capital letter
// - arrow function not work because dont have this keyword

// 4 step is happening
// ----------------------
// 1. New {} is created
// 2. Function is called, this = {}
// 3. Link to prototype
// 4. Function automatically return {}

const Person = function (firstName, birthYear) {
  this.first__name = firstName;
  this.birth__year = birthYear;

  // Never create methods inside constructor
  // this.calcAge = function () {
  //   console.log(2025 - this.birth__year);
  // };
};

// use new
const bani = new Person("Burhanudin", 2002);
const aisa = new Person("Nuraisa", 2000);
const nico = new Person("Nico", 2001);

console.log(bani);
// Person {first__name: 'Burhanudin', birth__year: 2002}
