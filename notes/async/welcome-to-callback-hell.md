## Welcome to Callback Hell

> Goal: Rendering the second data after the first data complety

[Geek: Understanding Callbacks and Callback Hell in JavaScript](https://www.geeksforgeeks.org/javascript/what-to-understand-callback-and-callback-hell-in-javascript/)

In JavaScript, callbacks are used for handling operations like reading files and making API requests. When there is excessive nesting of the functions it leads to a problem known as the **callback hell**. Due to this, it becomes difficult to read the code, debug, and maintain. But when we implement the promises and async/await it helps in improving the code.

### Callback Hell (Pyramid of Doom)

When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.

### What is Callback Hell?

Callback Hell in JavaScript can be defined as the situation where we have nested callbacks(functions passed as arguments to other functions) which makes the code difficult to read and debug. The term "callback hell" describes the deep nesting of functions that can result in poor code readability and difficulty in debugging, especially when handling multiple asynchronous operations.

```js
getData1((result1) => {
  getData2(result1, (result2) => {
    getData3(result2, (result3) => {
      getData4(result3, (result4) => {
        console.log("Finished: ", result4);
      });
    });
  });
});
```

```js
const getCountryAndNeightbour = function (country) {
  // Ajax country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // call the function
    renderCountry(data);

    // Get neightbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // Ajax country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};
```

[Next: Promises and the Fetch Api](./promises-and-the-fetch-api.md)
