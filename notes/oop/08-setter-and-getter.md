## Setter and Getter

Set and Getter are good to use when data validation is needed.

```js
class PersonCL {
  constructor(firstName, birthYear) {
    // validate data
    this._fullName = firstName;

    this.birthYear = birthYear;
  }

  // unique method will be added to the PersonCL prototype
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greeting() {
    console.log(`Hi, My name is ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Validate
  set _fullName(name) {
    if (name.includes(" ")) this.fullName = name;
    else alert(`${name} is not Full Name`);
  }
}

const bani = new PersonCL("Burhanudin Rabbani", 2002);
console.log(bani);
console.log(bani.fullName);

const aziz = new PersonCL("Aziz", 1999); // Error
console.log(aziz.fullName); // undefined
console.log(aziz);
```

[Next: Static](./09-statis.md)
