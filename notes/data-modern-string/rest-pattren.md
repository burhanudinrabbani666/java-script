## Rest Pattern and Parameters

Rest Pattern looks like the spread operator. have same syntax with three dots (...) but it actually does the opposite of the spread operator.

- **spread operator** use to build new array, or to pass multiaple valus into a function. to expand an array into **Individual** elements
- **rest pattern** use the exact same syntax to **collect** multiaple elements and condense them into an array.

#### Destructuring

```js
// spread because on RIGHT side of the operator =
const arr = [1, 2, ...[3, 4]];

// rest because on LEFT side of the operator =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); // 1 2 [ 3, 4, 5]
```

can using REST and SPREAD together

```js
// use REST and SPREAD togheter
const [pizza, , risoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risoto, otherFood); // otherFood collect all item after risoto and not include any skipped element
```

```js
// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
```

#### Function

```js
// 2. Function

const add = function (...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  console.log(sum);
};

add(2, 3);  // 5
add(5, 3, 7, 2); // 17
add(3, 4, 6, 5, 7, 2, 3, 1, 8); // 39

const x = [23, 5, 7];
add(...x); // 35


// restaurant
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },

restaurant.orderPizza(`Mushrooms`, `Onion`, `Olives`, `Spinach`);

// mainIng = `Mushroom`
// othering = [`Onion`, `Olives`, `Spinach`]
```
