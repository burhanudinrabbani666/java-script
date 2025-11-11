# ARRAY

- the code: [JavaScript](/array2/script.js)
- assigment: [assigmnet](/array2/assigment.js)

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
