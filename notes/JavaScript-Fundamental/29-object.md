## Object

The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

```js
const bani = {
  firstName: "Burhanudin",
  lastName: "Rabbani",
  birthYear: 2002,
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
  job: "unemployed",
  friends: [`Aziz`, `Farhan`, `Risaldi`],
};
```

[Next: Iteration](./29-a-dot-vs-bracket.md)
