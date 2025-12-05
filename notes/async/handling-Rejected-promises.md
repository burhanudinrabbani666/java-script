## Handling Rejected Promises

1. Promise.prototype.catch()

The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns another Promise object, allowing you to chain calls to other promise methods. It is a shortcut for then(undefined, onRejected).

[Promise.prototype.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

2. Promise.prototype.finally()

The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns another Promise object, allowing you to chain calls to other promise methods.

This lets you avoid duplicating code in both the promise's then() and catch() handlers.

[MDN: Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

```js
const renderError = message => {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

// .....

      return request2;
    })
    .then(respons2 => respons2.json()) // promise request2
    .then(data2 => renderCountry(data2[0], 'neighbour'))
    .catch(error => {
      // render any error ✔️
      console.error(`💥 ${error.message}`);
      renderError(`⚠️ Something went wrong: ${error.message} Try Again!`);
    });
};
```

[Next: Throw error](./throw-error.md)
