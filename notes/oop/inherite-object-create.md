## Inherite Object Create

    Object --> StudentProto --> PersonProto

```js
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
```
