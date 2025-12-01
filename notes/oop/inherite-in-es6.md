## Inherite in es6

```js
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
```
