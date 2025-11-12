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
