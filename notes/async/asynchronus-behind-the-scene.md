## Asynchronus Behind the scenes

## The event loop in practice

```js
console.log("test start"); // first exxecute
// this is the last
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve("Resolved Promise 1").then((res) => console.log(res)); // this is microtask queue
Promise.resolve("Resolved Promise 2").then((res) => {
  for (let index = 0; index < 10000000000; index++) {}
  console.log(res);
}); // this is microtask queue
console.log("Test end"); // first exxecute
```

## Building a simple promise

## promsifying the golocation API

## Consuming promises with async/await

## Error handling with try... catch

## Returning values from async functions

## Running Promises in parallel

## Others Promises Combinator: race, allSettled anf any
