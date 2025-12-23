## ES6 Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

1. Class are NOT hoisted
2. Class are first-class citizen
3. Class are executed in strict mode

```js
// ES6 Class

// class expression
const PersonCLEx = class {};

// class declartion. Use This ❗
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // unique method will be added to the PersonCL prototype
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greeting() {
    console.log(`Hi, My name is ${this.firstName}`);
  }
}

const bani = new PersonCL("Burhanudin", 2002);
console.log(bani);

bani.calcAge();
bani.greeting();

// still can adding ouside declaration but dont do that
// PersonCL.prototype.greeting = function () {
// console.log(`Hi, My name is ${this.firstName}`);
// };
```

[Next: Setter and Getter](./08-setter-and-getter.md)
