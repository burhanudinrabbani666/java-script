## Type Conversion and coercion

In JavaScript Type Conversion can be defined as converting the data type of the variables from one type to the other manually by the programmer(explicitly) or automatically by the JavaScript(implicitly).

- Implicit Type Conversion (Coercion): Implicit Type Conversion occurs automatically by the JavaScript.
- Explicit Type Conversion: Explicit Type Conversion occurs when the programmer manually changes the type of the variables using the function Number(), String(), and Boolean().

### Implicit Type Conversion (Coercion)

In JavaScript, the implicit type conversion or coercion conversion can be defined as the automatic conversion of the data type of the variables from one type to another type. Implicit type conversion mostly occurs when we are performing the arithmetic or the logical operations.

```js
const inputYear = "2002";

console.log(inputYear + 10); //200210 not 2012
console.log(Number(inputYear) + 10); // 2012

console.log(Number("jonas")); // NaN
console.log(typeof NaN); // number

console.log(String(23)); // "23"

// Type Coercions
console.log(`I am ` + 23 + ` Years Old`); // I am 23 Years Old
console.log("23" - "10" - 3); // 10
console.log("23" * "10"); // 230
```

> ( +, \*, / ) operator coverted number to string
> ( - ) minus operator coverted string to number

[Next: Truthy Falsy Values](./13-truthy-falsy-values.md)
