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

```js
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery drawa is happening 🎲");

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win 💰");
    } else {
      reject(new Error("You loses your Money 💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisfyng setTimeout
const wait = (second) => {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 1 second");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 2 second");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 3 second");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 4 second");
    return wait(1);
  })
  .then(() => console.log("I waited for 5 second"));
```

## promsifying the golocation API

```js
function whereAmI() {
  getPosition()
    .then((pos) => {
      const { latitud: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(`Your in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then((res) => res.json())
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

btn.addEventListener("click", whereAmI);
```

## Consuming promises with async/await

## Error handling with try... catch

## Returning values from async functions

## Running Promises in parallel

## Others Promises Combinator: race, allSettled anf any
