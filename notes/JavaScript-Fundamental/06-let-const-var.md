## let, const, and var

Reference:

[Geeks; JavaScript Variables](https://www.geeksforgeeks.org/javascript/javascript-variables/)

### var keyword

> Dont use var anymore ❗

var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

```js
var a = "Hello Geeks";
var b = 10;
console.log(a);
console.log(b);
```

### let keyword

let is a keyword in JavaScript used to declare variables and it is **Block-scoped** and not hoisted to the top, suitable for mutable variables

```js
let a = 12;
let b = "gfg";
console.log(a); // 12
console.log(b);

// mutate primitive value
a = 20;
console.log(a); // 20
```

### const keyword

const is a keyword in JavaScript used to declare variables and it is Block-scoped, **immutable bindings that can't be reassigned**, though objects can still be mutated.

```js
const a = 5;
let b = "gfg";
console.log(a);
console.log(b);


const birtYear = ; // Error canot undefined
const birtYear = null; // not Error can null
```

[Next: Basic Operators](./07-Basic-Operators.md)
