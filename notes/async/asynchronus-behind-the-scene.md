## Asynchronus Behind the scenes

JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code

1. JavaScript Engine

JavaScript engines are interpreters that parse and execute JavaScript code. Modern JavaScript engines use just-in-time (JIT) compilation to convert JavaScript code into machine code that can be executed by a computer's processor. A JavaScript engine is typically developed and used in web browsers to run client-side code but can also be used in server-side environments like Node.js.

- [CallStack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack):A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
- If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

[Heap](https://www.geeksforgeeks.org/javascript/min-heap-in-javascript/):A Heap is a special Tree-based Data Structure that has the following properties.

[MDN: JavaScript engine](https://developer.mozilla.org/en-US/docs/Glossary/Engine/JavaScript)

2. WEB APIs

When writing code for the Web, there are a large number of Web APIs available. Below is a list of all the APIs and interfaces (object types) that you may be able to use while developing your Web app or site.

Web APIs are typically used with JavaScript, although this doesn't always have to be the case.

[MDN: Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

3. Callback queue

The Callback Queue is where asynchronous operations, such as timers, network requests, and file system operations, wait to be executed. When these operations complete, their callback functions are added to the Callback Queue.

[Understanding the JavaScript Engine: Call Stack, Event Loop and Callback Queue](https://medium.com/@AnaghTechnologies/understanding-the-javascript-engine-call-stack-event-loop-and-callback-queue-fe62f1611823)

## The event loop in practice

```js
console.log(`Test Start`); // executed First
setTimeout(() => console.log(`0 Second timer`), 0); // executed Last
Promise.resolve("Promise 1").then((res) => console.log(res)); // MicroTask
Promise.resolve("Promise 2").then((res) => {
  console.log(res);
});
console.log(`Test End`); // executed First

/* List Execute
1. JavaScript Engine function
2. MicroTask Queue
3. WEB APIs
*/
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
