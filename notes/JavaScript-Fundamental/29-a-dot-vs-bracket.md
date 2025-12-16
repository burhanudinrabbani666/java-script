## Dot VS Bracket notation

dot is more cleaner and easy to write

bracket is more for getting data from user

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

console.log(bani);
console.log(bani.lastName);
console.log(bani["firstName"]);

const nameKey = "Name";
console.log(bani[`first` + nameKey]);
console.log(bani[`last` + nameKey]);

const interestedIn = prompt(
  "What do you want to know about bani? choose between: \n firstName, lastName, age, job and friends"
);
//  Use Bracket
if (!bani[interestedIn])
  console.log(`Bani dont have any data about ${interestedIn}`);
else console.log(bani[interestedIn]);

// Add new properti and the value
bani.location = "Indonesia";
bani.instagram = "bbaanii_";

console.log(bani);

console.log(
  `${bani.firstName} has ${bani.friends.length} friends, and his best friend is called ${bani.friends[0]}`
);
```

[Next: Object Method](./29-b-object-methods.md)
