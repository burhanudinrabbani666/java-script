## The Conditional Ternary

The ternary operator is easier to read and produces a value directly.

```js
// Conditional Statement
const age = 23;

age > 18
  ? console.log("I Like to Drink Wine")
  : console.log("I Like to Drink Water");

const drink = age >= 18 ? "Wine" : "Water";

console.log(drink);

// produce value directly
console.log(`I like to drink ${age > 18 ? "Wine" : "Water"}`);
```

> Do not use ternary operation for large blocks. ❗❗❗

[Next: Javascript Release](./20-javascript-release.md)
