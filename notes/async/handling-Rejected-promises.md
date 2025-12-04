## Handling Rejected Promises

```js
const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};


    .catch(err => { // Handling error
      console.error(`${err} 💥💥💥`);
      renderError(`Something is wrong 💥💥💥 ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
```
