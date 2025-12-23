## Prototype innherence and The Prototype chain

Person.prototype is not the prototype of the Person but of al object that created through the person function.

```js
const Person = function (firstName, birthYear) {
  this.first__name = firstName;
  this.birth__year = birthYear;
};

// ⬇️

Person.prototype.calcAge = function () {
  console.log(`${2025 - this.birth__year} Years old`);
};
```

[Next: Proto inheriance on build in](./06-proto-inheriance-on-built-in-obj.md)
