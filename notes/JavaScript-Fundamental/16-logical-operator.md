## Logical Operator

```js
// Logical Oprator in practica
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); // true
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

// if (hasDriverLicense && hasGoodVision) {
//   // false
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should Drive... ");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired); // false

if (hasDriverLicense && hasGoodVision && !isTired)
  console.log("Sarah is able to drive!");
else console.log("Someone else should Drive... ");
```

[Next: The Switch Statment](./17-the-switch-statment.md)
