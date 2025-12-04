## Consume Promise

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

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};
getCountryData("indonesia");
```

[Next: Chaning Promises](./chaining-promises.md)
