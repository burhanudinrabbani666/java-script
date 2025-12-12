## Truthy and Falsy Values

### What Are Truthy Values?

Truthy values are values that are evaluated to be true when used in a Boolean context. Simply put, any value that is not explicitly falsy is considered truthy.

These are some truthy values

- Non-zero numbers: 42, -1, 3.14
- Non-empty strings: "hello", "0", " "
- Objects and arrays: {}, []
- Functions: function() {}
- Dates: new Date()
- Symbols: Symbol()
- BigInt values other than 0n: 10n

### What Are Falsy Values?

Falsy values are values that evaluate to false when used in a Boolean. JavaScript has a fixed list of falsy values

### 5 Falsy Values

- 0
- " (Empty Value) "
- undefined
- null
- NaN

```js
const money = 0; // falsy value

if (money) console.log("Don't speend it All"); // executed when truthy value
else console.log("You Should get a Job");
```

[Next: Equality Operator](./14-equality-operator.md)
