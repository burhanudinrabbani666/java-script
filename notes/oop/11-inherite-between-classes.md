## Inherite Between "Classes"

    object ---> Protype(child) ---> Prototype(parent)

```js
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
```

[Next: Inheritance ES6 ](./12-inherite-in-es6.md)
