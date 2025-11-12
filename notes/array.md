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

## Logical Assigment Operators

```js
const rest1 = {
  name: " Capri1",
  numGuest: 20,
};

const rest2 = {
  name: " La porta",
  founder: "Asep del piero",
};

// add new property
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

// much shorter
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

// Nullish assigment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assigment
// rest1.founder = rest1.founder === undefined && `<Unknown>`;
// rest2.founder = rest2.founder && `<Unknown>`;

rest1.founder &&= `<Unknown>`; // nothing happen
rest2.founder &&= `<Unknown>`; // founder: <Unknown>

console.log(rest1);
console.log(rest2);
```

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

## Enhanced Object Literals

```js
const weekdays = [`mon`, "tue", `wed`, `thu`, `fri`, `sat`, `sun`];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  locatoin: "Via angelo Tavanti 23, Firenze Italy",
  categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 enhanced object literals
  hours,
};

//
```

## Optional Chaining (.?)

The optional chaining operator (?.) is used to safely access a property or call a method. If the object or property preceding the ?. operator is null or undefined, the expression "short-circuits" and immediately evaluates to undefined, without throwing an error. This eliminates the need for explicit null or undefined checks using if statements or ternary operators.

```js
// Optional Chaining
console.log(restaurant.openingHours?.mon?.open); // undefined because mon? is undefined

const days = [`mon`, "tue", `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;

  console.log(`on ${day} we are open at ${open}`);
}

// On Methods
console.log(restaurant.orderRissoto?.(0, 1) ?? `method does not exist`);

// On Arrays
const userArr = [{ name: `Bani`, email: `bani@exm.io` }];

console.log(userArr[0]?.name ?? `user array empty`);
```

## Looping Object : Keys, Values, and Entries

![OpenigHours](/notes/assets/Object.svg)

#### Properti Name / keys

```js
const properties = Object.keys(restaurant.openingHours);
let str = ` we are open on ${properties.length} days:`;

for (const day of properties) {
  console.log(day); // thu fri sat
  str += ` ${day},`;
}

console.log(str);
```

#### Properti Values

```js
// Properties Values
const values = Object.values(openingHours);
console.log(values);
```

#### Properti Entries

```js
// Properties Entries (keys: Value)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and closed at ${close}`);
}
```

## Sets

sets is collection of unique values. sets can never **have** any duplicate.

```js
const orderSet = new Set([
  `pasta`,
  `pizza`,
  `pizza`,
  `rissoto`,
  `pasta`,
  `rissoto`,
]);

console.log(orderSet); // [ "pasta", "pizza", "rissoto" ]
```

for checking set use **size**, not length like normal array. and have another methode

```js
console.log(orderSet.size); // 3

// has
console.log(orderSet.has(`pizza`)); // true
console.log(orderSet.has(`Bakwan`)); // false

// add new element
orderSet.add(`garlic bread`); // the value still unique or just one in order set
orderSet.add(`garlic bread`);

// delete
orderSet.delete(`garlic bread`);
```

> in set dont have any index. use .has for return properti form set

### New Operation to make SETS useful!

#### intersection method

This is a recently added method to the SetObject in JavaScript, designed specifically for finding the common elements between two sets.

```js
// intersection method

const commonFood = italianFoods.intersection(mexicanFoods);
console.log([...commonFood], `this is intersection method, in Array`); // Set [ "tomatoes", "garlic" ]
```

![intersection-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection/diagram.svg)

#### union method

the union()Method is a relatively new addition to the Setobject, designed to combine two sets into a new set containing all **unique** elements from both

```js
// union method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion, ` This union method`);
```

![union-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union/diagram.svg)

### difference method

The difference() method of Set instances takes a set and returns a new set containing elements in this set but not in the given set.

```js
// difference method
const uniqueItailianFood = italianFoods.difference(mexicanFoods);
console.log(uniqueItailianFood, `this is difference method`); // Set(4) [ "pasta", "gnocchi", "olive oil", "basil" ]
```

![differnece-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference/diagram.svg)

#### symmetricDifference method

The symmetricDifference() method of Set instances takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.

```js
const uniqueItalianAndMExicanFood =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMExicanFood);
```

![symmetricDifference-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference/diagram.svg)

## Maps

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```js
const rest = new Map();
rest.set(`name:`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
rest.set(2, `Barcelona, Spain`);
console.log(rest);

rest
  .set(`categories`, ["Italian", "Pizzeria", "vegetarian", "Organic"])
  .set(`open:`, 11)
  .set(`closed:`, 23)
  .set(true, `We are Opend :D`)
  .set(false, `We are CLosed :(`);
```

#### get() Method

The get() method of Map instances returns the value corresponding to the key in this Map, or undefined if there is none. Object values are returned as the same reference that was originally stored, not as a copy, so mutations to the returned object will be reflected anywhere that reference is held, including inside the Map.

```js
// get
console.log(rest.get(`name`)); // Classico Italiano
console.log(rest.get(true)); // We are Opend :D
console.log(rest.get(1)); // Firenze, Italy
```

```js
const currentTime = Math.trunc(Math.random() * 24);

const opening =
  currentTime > rest.get(`open`) && currentTime < rest.get(`closed`)
    ? `hei`
    : `Sorry`;

const description = rest.get(
  currentTime > rest.get(`open`) && currentTime < rest.get(`closed`)
);

console.log(`I wanna go to your restaurant at ${currentTime}`);
console.log(opening, description);
```

## Which Data Structure To Use?

#### sources of data

- **From the program itself:** Data written directly in source code (e.g status message)
- **From the UI:** Data input from user or data written in DOM (e.g tasks in todo App)
- **From external sources:** Data fetched for example from Web API (e.g recipe object)

## Strings

```js
const airline = `TAP air Portugal`;
const plane = `AX123`;

console.log(plane[0]); // A
console.log(plane[1]); // X
console.log(plane[2]); // 1
console.log(`Bani`[3]); // i

console.log(airline.length); // 16
console.log(`Bani`.length); // 4

// indexOf
console.log(airline.indexOf(`P`)); //2//first occurance
console.log(airline.lastIndexOf(`P`)); //8//last occurance
console.log(airline.indexOf(`Portugal`)); //8
```

#### .slice()

The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth character through the eighth character (characters indexed 4, 5, 6, and 7):

```js
// slice
console.log(airline.slice(4)); // air portugal
console.log(airline.slice(8)); // Portugal
console.log(airline.slice(0, 8)); // TAP air //start index[0] adn end index[8]

// extract the first word without hardcode
console.log(airline.slice(0, airline.indexOf(` `))); // first word
console.log(airline.slice(airline.lastIndexOf(` `) + 1)); // Last word
```

```js
// example case
const checkMiddelSeat = function (seat) {
  // B and E is middle seat
  const s = seat.slice(-1);

  s == `B` || s == `E`
    ? console.log(`your got the middle Seat 😥`)
    : console.log(`Your got lucky 🥳`);
};

checkMiddelSeat(`11B`); // your got the middle Seat 😥
checkMiddelSeat(`23C`); // Your got lucky 🥳
checkMiddelSeat(`14E`); // your got the middle Seat 😥
```
