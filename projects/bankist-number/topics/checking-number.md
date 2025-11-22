## Checking Number

```js
console.log(23 == 23.0);

console.log(+"23"); // +
console.log(+"23"); // +

// Parsing
console.log(Number.parseInt("300px", 10)); // 300 string should be start with number

// Float
console.log(Number.parseFloat("2.5rem", 10)); // 2.5
console.log(Number.parseInt("2.5rem", 10)); // 2

// isNaN : boolean
console.log(Number.isNaN("2.5rem")); // false
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN(+"25px")); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite : boolean
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite("20px")); // false
console.log(Number.isFinite(23 / 0)); // false
```
