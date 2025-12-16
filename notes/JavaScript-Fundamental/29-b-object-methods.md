## Object methods

we can create methods that perform calculations or display something in an object

```js
const bani = {
  firstName: "Burhanudin",
  lastName: "Rabbani",
  birthYear: 2002,
  job: "unemployed",
  friends: [`Aziz`, `Farhan`, `Risaldi`],
  hasDriverLicense: true,

  // calcAge: function () {
  //   return 2025 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriverLicense
        ? `has` //
        : `Dont Have`
    } Driver license`;
  },
};

console.log(bani.calcAge());
console.log(bani.age);
console.log(bani.getSummary());
```

[Next: Itteration the Loop](./30-iteration-the-for-loop.md)
