## Chaning Promises

Dont chaining .then() inside the callback!

```js
function getCountryAndNeighbor(country) {
  const country1 = fetch(`https://restcountries.com/v3.1/name/${country}`);

  country1
    .then((response) => response.json()) // .json() is also async
    .then((data) => {
      renderCountry(data[0]);

      // Rendering neighbour inside then
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Rendering country 2
      const country2 = fetch(
        `https://restcountries.com/v3.1/alpha/${neighbour}`
      );

      // Always return and handling outside
      return country2;
    })
    .then((response) => response.json()) // still returning promises
    .then((data) => {
      // console.log(data);
      renderCountry(data[0], "neighbour");
    });
}

getCountryAndNeighbor("sweden");
```

[Next: Handling Rejected Promises](./handling-Rejected-promises.md)
