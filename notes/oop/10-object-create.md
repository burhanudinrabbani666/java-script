## Object.create()

The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

```js
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
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init("sarah", 1999);
sarah.calcAge();
```

[Next: Challenge2](./challenge2.md)
