const restaurant = {
  name: "Classico Italiano",
  locatoin: "Via angelo Tavanti 23, Firenze Italy",
  categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/*

const arr = [1, 2, 3];

// Old way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
console.log(arr); // [1, 2, 3]

// take the first and third value with pace valu
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian vegetarian

// switch data in object

// Old Way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // vegatarian Italian

// desctructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // vegtarian Italian

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Brad Pizza

// nested Array
const nested = [1, 2, [5, 6]];
// const [first, , arrNested] = nested;
// console.log(first, arrNested); // 1 [5, 6]

// using destructuring inside destructuring
const [first, , [arrNested1, arrNested2]] = nested;
console.log(first, arrNested1, arrNested2); // 1 5 6 separateed varibale

// set default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1  r still use default value

restaurant.orderDelivery({
  time: `21:30`,
  address: `Budur Kragnwangi 12`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: `Budur Duku`, starterIndex: 2 });

// Object destructuring

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// make variable name different from properties name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter); // menu is new properti because no properti in restaurant // starter meu change name and fill default array

// mutate variable in object
let a = 111;
let b = 666;
const obj = { a: 14, b: 10, c: 7 };
({ a, b } = obj); // warp the object () to mutate the variable
console.log(a, b);

// nested object

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11,23

// SPREAD OPERATOR

const arr = [7, 8, 9];

// Bad
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// Using spread
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr); // [1, 2, 7, 8, 9]

console.log(...goodNewArr); // 1 2 7 8 9 spread individualy value

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
// console.log(`Hello ${...bani} `); // error

// Function with Spread Operator

// const ingridients = [
// prompt(`Let's Make Pasta! Ingridients 1?`),
// prompt(`Let's Make Pasta! Ingridients 2?`),
// prompt(`Let's Make Pasta! Ingridients 3?`),
// ];

// restaurant.orderPasta(...ingridients);

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

// REST PATTERN

// 1. Detructuring
// spread because on RIGHT side of the operator =
const arr = [1, 2, ...[3, 4]];

// rest because on LEFT side of the operator =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); // 1 2 [ 3, 4, 5]

// use REST and SPREAD togheter
const [pizza, , risoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risoto, otherFood); // otherFood collect all item after risoto and not include any skipped element

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Function

const add = function (...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(3, 4, 6, 5, 7, 2, 3, 1, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`Mushrooms`, `Onion`, `Olives`, `Spinach`);


// SHORT CIRCUITING

// OR
console.log(`Bani` || 3); // Bani
console.log(`` || `Bani`); // Bani
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || null || `` || 0 || `Bani` || 23); //Bani

// case
restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// More short
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23

console.log(`-----------AND---------`);

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
*/
