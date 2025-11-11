const restaurant = {
  name: 'Classico Italiano',
  locatoin: 'Via angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risoto'],
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
*/
