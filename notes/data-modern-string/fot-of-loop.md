## Looping Arrays : The For of Loop

for of loop just meant to give the current **element**.

```js
// FOR OF LOOP

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// reguler for loop
for (let index = 0; index < menu.length; index++) {
  console.log(menu[index]);
}

// for of loop
for (const item of menu) {
  console.log(item);
}
```

```js
// for of loop with entries method
for (const item of menu.entries()) {
  const [index, food] = item;
  console.log(`${index + 1}: ${food}`);
}

// more destructuring
// for of loop with entries method
for (const [index, food] of menu.entries()) {
  console.log(`${index + 1}: ${food}`);
}
```
