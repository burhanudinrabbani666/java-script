## Chaning Promises

```js
// Fetch
const countryData = function (country) {
  // Fetch Country (1)
  // make more meaningable with storing to variable
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

  // method
  request
    .then((respons) => respons.json()) // json return promise
    .then((data) => {
      renderCountry(data[0]);

      // Get neighbour data
      const neighbour = data[0].borders?.[0];

      // Fetch Country (2)
      const request2 = fetch(
        `https://restcountries.com/v3.1/alpha/${neighbour}`
      );

      return request2;
    })
    .then((respons2) => respons2.json()) // promise request2
    .then((data2) => renderCountry(data2[0], "neighbour"));
};
countryData("finland");
```

[Next: Handling Rejected Promises](./handling-Rejected-promises.md)
