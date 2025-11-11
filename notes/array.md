# ARRAY

- the code: [JavaScript Code](/code/script.js)
- assigment: [assigmnet](/code/assigment.js)

## Destructrin Array

dstructuring is an ES6 feature and its basically a way of **unpacking** values from an Array or an Object into separate variables.

```js
const arr = [1, 2, 3];

// Old way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
console.log(arr); // [1, 2, 3] the original array not effected

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzaria

// take the main and secondary value with pace valu
const [main, , secondary] = restaurant.categories; //
console.log(main, secondary); // Italian vegetarian
```

- switch data in object

```js
// Old Way
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // vegatarian Italian

// desctructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // vegtarian Italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Brad Pizza
```

- destructuring Nested

```js
// nested Array

const nested = [1, 2, [5, 6]];
const [first, , arrNested] = nested;
console.log(first, arrNested); // 1 [5, 6]

// using destructuring inside destructuring
const [first, , [arrNested1, arrNested2]] = nested;
console.log(first, arrNested1, arrNested2); // 1 5 6 separateed varibale
```

- default value

```js
// set default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1  r still use default value
```

## Destructuring Object

using the cruly braces **{}** to desturcturing. should be to do is to **provide the variable name that exactly match th property names tah we want to retrive from the object**.

```js
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
```

- make variable name different from properties name

```js
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// new properti and cahnge name with default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter); // menu is new properti because no properti in restaurant // starter meu change name and fill default array
```

- mutate variable in object

```js
let a = 111;
let b = 666;
const obj = { a: 14, b: 10, c: 7 };
({ a, b } = obj); // warp the object () to mutate the variable
console.log(a, b);
```

- nested object

```js
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11,23
```

- destructuring function with lot params

```js

// restaurant method
 orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `22.0`,
    address,
  }) {
    console.log(
      `Order received ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} wil be deliver to ${address} at ${time}`
    );
  },

// example case

restaurant.orderDelivery({
  time: `21:30`,
  address: `Budur Kragnwangi 12`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: `Budur Duku`, starterIndex: 2 });
```

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

## Short circuiting ( && And || )

can use **ANY** Data type, return **ANY** data type, short circuiting

### OR ||

if the first value is truthy value, it will immadeatly retunr that first value.

```js
console.log(`Bani` || 3); // Bani
console.log(`` || `Bani`); // Bani
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || null || `` || 0 || `Bani` || 23); // Bani // Because Bani is the first truthy value

// case
restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// More short
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23
```

### AND

The AND operator shirt circuits, when the first value is falsy, and then immediatly returns that falsy value without even evaluating the second operand

```js
// AND
console.log(0 && `Bani`); // 0
console.log(`Bani` && undefined); // undefined
console.log(null && 0);
null;

console.log(`Bani` && 23 && null && `bani`); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "chess");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Chess");
// if the first operand is true the execut next operand
```

> As a practical applications, we can use the OR operator to set default value, and we can use the AND operator to execute code in the second operand, if the first one is true

### NULLISH coalescing operator

NULLISH coalescing operator works with the idea or with the concept of **nullish** value instead of falsy values. nullish value is **null** and **undefined**

```js
restaurant.numGuests = 0;

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
```
