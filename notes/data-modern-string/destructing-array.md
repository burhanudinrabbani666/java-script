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
