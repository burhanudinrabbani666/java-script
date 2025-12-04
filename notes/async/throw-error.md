## Throw error

Baseline Widely available

The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns another Promise object, allowing you to chain calls to other promise methods. It is a shortcut for then(undefined, onRejected).

[Promise.prototype.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

```js
const neighbour = data[0].borders?.[0];
if (!neighbour) throw new Error(`No Neighbord Found`);
```

[Next: ]()
