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
