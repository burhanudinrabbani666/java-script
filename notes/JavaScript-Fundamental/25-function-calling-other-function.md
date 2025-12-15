## Function calling another function

> Not recommended to doing this

```js
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProccesor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple and ${orangePieces} oranges`;

  return juice;
}

console.log(fruitProccesor(2, 3));
// Juice with 8 pieces of apple and 12 pieces of oranges
```

It is better to do logic inside a function than to create a new function outside the function scope.

[Next: Reviewing Function](./26-reviewing-function.md)
