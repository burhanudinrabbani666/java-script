## Commonjs Modules

CommonJS is a set of standards used to implement modules on JavaScript. The project was started by Mozilla engineer Kevin Dangoor in 2009.

CommonJS is mainly used in server-side JS apps with Node, as browsers don't support the use of CommonJS.

As a side comment, Node used to only support CommonJS to implement modules, but nowadays it also supports ESmodules which is a more modern approach.

```js
// Export
export.addCart = (product, quantity) => {
  const newCartArray = [...cart, product, quantity];

  cart = newCartArray;
  console.log(cart);
  console.log(`${quantity} ${product} added to cart`);
};

// Import
const {addCart} = require('./shoppingCrat.js')
```

[Next: Command Line](./Command-Line.md)
