## Function

[MDN: Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

```js
// Function

function logger() {
  console.log("Hello World");
}

logger();

function fruitProccesor(apples, oranges) {
  const juice = `Juice with ${apples} apple and ${oranges} oranges`;

  return juice;
}

const appleJuice = fruitProccesor(3, 7);
console.log(appleJuice);
```

[Next: Declaraion Vs Expression](./23-function-declaration-vs-expression.md)
