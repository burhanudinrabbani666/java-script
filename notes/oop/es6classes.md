## ES6 Classes

1. Class are NOT hoisted
2. Class are first-class citizen
3. Class are executed in strict mode

```js
// ES6 Classes

//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(firstName, BirthYear) {
    this.firstName = firstName;
    this.BirthYear = BirthYear;
  }

  // will be prototype of the object
  clacAge() {
    console.log(2025 - this.BirthYear);
  }

  greeting() {
    console.log(`Hi ${this.firstName}`);
  }
}

const cicih = new PersonCl("Cicih", 2001);
console.log(cicih);
cicih.clacAge();
cicih.greeting();

console.log(cicih.__proto__ === PersonCl.prototype);
```
