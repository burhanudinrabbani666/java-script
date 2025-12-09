## Declarative and Functional JavaScript Principles

### Imparative

- Programmer explains "HOW to do things"
- We Explain the computer every single step it has to follow to achieve a result

```js
const arr =[1,2,3,4]
const doubled = []

for (let index=0; index <= arr.length; index++>)
doubled += arr[index] * 2

```

### Declarative

- Programmer tells "WHAT to do"
- we simple describe the way the computer should achieve the result
- the HOW (step by step instructions) gets abstracted away

```js
const arr = [1, 2, 3, 4];
const doubled = arr.map((n) => n * 2);
```

> use Declarative for modern JavaScript

## 🏆 Functional Programming

- Declarative programming paradigm
- Based on the idea of writing software by combining many pure functions, avoid side effects and mutating data.

- 👉 **Side effect:** Modification (mutation) of any data outside of the function (mutating ecternal variables, logging to console, writing to DOM, etc).
- 👉 **Pure Function:** Function without side effect. Does not depend on external variables. **Given the same inputs, always returns the same outputs**.
- 👉 **Immutability:** State (data) is **never** modified! Instead, stateis **copied** and the copy is mutated and returned.

### Functional Programming Techniques

- 👉 Try avoid dat mutations
- 👉 Use build-in method that dont produce side effects
- 👉 Do data transformations with the methods such as .map(), .filter(), and .replace()
- 👉 Try Avoid side effects in functions; this is of course not always possible.

### Declarative syntax

- Use array and object destructing
- Use the spread operator (...)
- Use the ternary (Conditional) operator
- Use template literals

[Next: ]()
