## Constructor Functions and the new Operator

```js
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
```
