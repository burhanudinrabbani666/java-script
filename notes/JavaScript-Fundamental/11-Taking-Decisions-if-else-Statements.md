## Taking Decisions: if / else Statements

[MDN: if... else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

```js
const age = 15;
const isOldEnough = age >= 18; // false

// Executed when is true value
if (isOldEnough) {
  console.log("sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} Years ⚠️s`);
}

// Another example

const birthYear = 2002;
let century;

if (birthYear <= 1000) century = "20th Century";
else century = "21th Century";

console.log(`he is birth in ${century}`);
```

[Next: Type conversion and coercion](./12-Type-conversion-and-coercion.md)
