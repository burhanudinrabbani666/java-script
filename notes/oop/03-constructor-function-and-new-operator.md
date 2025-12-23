## Constructor Functions and the new Operator

- Using Capital letter
- arrow function not work because dont have this keyword

### 4 step is happening

1.  New {} is created
2.  Function is called, this = {}
3.  Link to prototype
4.  Function automatically return {}

```js
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
// Expected: Person {first__name: 'Burhanudin', birth__year: 2002}
```

[Next: Protoype](./04-prototypes.md)
