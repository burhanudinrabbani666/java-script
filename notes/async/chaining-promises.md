## Chaning Promises

```js
const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      console.log(neighbour);

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0], "neighbour");
    });
};

getCountryData("Indonesia");
```

[Next: Handling Rejected Promises](./handling-Rejected-promises.md)
