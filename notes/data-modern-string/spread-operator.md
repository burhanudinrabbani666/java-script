## Spread Operator

Spread operator is basically to spread an array into all its elements or unpacking all the array elements at one.

```js
// Spread Operator
const arr = [7, 8, 9];

// Bad
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// Using spread
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr); // [1, 2, 7, 8, 9]

console.log(...goodNewArr); // 1 2 7 8 9 spread individualy value
```

_is the spread operator same as with to destructuring ?_

spread take all the element from the array and its also doesn't create new variable. As a consequnce, we can only use it in places where we would otherwise write valus seperated with the commas.

```js
// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// copy and add new properti
const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// join 2 array or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterable : array, string, maps, sets, NOT Objects
const bani = "Rabbani";
const letters = [...bani, ` `, `S.`];
console.log(letters); // [ "R", "a", "b", "b", "a", "n", "i", " ", "S." ]
console.log(...bani); // R a b b a n i
console.log(`Hello ${...bani} `); // error
```

- for function

```js
// restaurant

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

const ingridients = [
  prompt(`Let's Make Pasta! Ingridients 1?`),
  prompt(`Let's Make Pasta! Ingridients 2?`),
  prompt(`Let's Make Pasta! Ingridients 3?`),
];

restaurant.orderPasta(...ingridients);

```

spread also can use to Object.

```js
// Object
const newRestaurant = {
  ...restaurant,
  founder: `Rabbani`,
  foundedIn: 2025,
};
console.log(newRestaurant);

// change properti in Object
const newRestaurantCopy = { ...newRestaurant };
newRestaurantCopy.founder = `Jokowi`;

console.log(newRestaurantCopy.founder); //copy // Jokowi
console.log(newRestaurant.founder); // original // Rabbani
```
