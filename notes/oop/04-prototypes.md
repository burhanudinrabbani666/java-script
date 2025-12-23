## prototypes

1. each and every function in JavaScript automatically has a property called prototype And includes constructor functions.

[prototype](https://javascript.info/prototype-inheritance)

```js
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
```
