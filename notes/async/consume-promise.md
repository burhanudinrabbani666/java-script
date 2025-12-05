## Consume Promise

### Promise Method

#### Promise.prototype.then()

The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It stores the callbacks within the promise it is called on and immediately returns another Promise object, allowing you to chain calls to other promise methods.

- Response: json() method

The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

```js
request.then(function (respons) {
  respons.json();
});
```

```js
// const getCountryData = country => {
// fetch(`https://restcountries.com/v3.1/name/${country}`)
// .then(response => {
// return response.json();
// })
// .then(data => {
// renderCountry(data[0]);
// });
// };

const countryData = function (country) {
  // make more meaningable with storing into variable
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  // method
  request
    .then((respons) => respons.json()) // json return promise
    .then((data) => renderCountry(data[0]));
};
```

[Next: Chaning Promises](./chaining-promises.md)
