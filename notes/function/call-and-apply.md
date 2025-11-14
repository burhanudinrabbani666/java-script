## Call And Apply Method

#### Call

The call() method of Function instances calls this function with a given this value and arguments provided individually.

Normally, when calling a function, the value of this inside the function is the object that the function was accessed on. With call(), you can assign an arbitrary value as this when calling an existing function, without first attaching the function to the object as a property. This allows you to use methods of one object as generic utility functions.

```js
const book = luthansa.booking; // "this" in here is point to nothing

// Error
// book(126, `Mike Tyson`)

// CALL
book.call(euroWings, 123, `Rabbani`);
console.log(euroWings);

book.call(luthansa, 125, `Jokowi`);
console.log(luthansa);
```

## APPLY

The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

```js
// APPLY METHOD
const flightData = [583, `M. Salah`];
book.apply(swiss, flightData);
console.log(swiss);
```

> Dont use apply again !!!
