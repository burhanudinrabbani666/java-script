## Arrow Function

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
- Arrow functions cannot use yield within their body and cannot be created as generator functions.

```js
// Arrow Function ES6
const calcAge3 = (birthYear) => 2025 - birthYear;

const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;

  // return retirement;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "Bani"));
console.log(yearsUntilRetirement(2001, "Nico"));
// Bani retires in 42 years
// Nico retires in 41 years
```

[Next: Function calling other function](./25-function-calling-other-function.md)
