## Equality Operator

[Geeks; JavaScript ‘===’ vs ‘==’Comparison Operator](https://www.geeksforgeeks.org/javascript/javascript-vs-comparison-operator/)

### Equality (==)

The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types

### Strict equality (===)

The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

> Always Use Strict Equality

```js
// Equality operator
const age = 10;
if (age === 10) console.log("You just becoming an Adult :D");

// Equality
console.log(age == "10"); // true

// Strict Equality
console.log(age === "10"); // False
```

[Next: Boolean Logic](./15-boolean-logic.md)
