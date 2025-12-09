# Exporting and Importing in ES6 Modules

### Import

- [MDN: Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

The static import declaration is used to import read-only live bindings which are exported by another module. The imported bindings are called live bindings because they are updated by the module that exported the binding, but cannot be re-assigned by the importing module.

In order to use the import declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding type="module" to the tag. Modules are automatically interpreted in strict mode.

There is also a function-like dynamic import(), which does not require scripts of type="module".

```js
// Importing Modules
import "./shoppingCrat.js";
console.log("Importing Module");
```

```js
// Export Multuaple Value
import * as ShoppingCart from "./shoppingCrat.js";
ShoppingCart.addCart("Milk", 10);
console.log(ShoppingCart.totalPrice, ShoppingCart.qty);
```

```js
// using export default

// Dont mix like this. make more clear
import add, { cart } from "./shoppingCrat.js";

add("mie Ayam", 2);
add("Bakso", 3);
add("Gudeg", 4);

console.log("This is Cart", cart);
```

### Export

- [MDN: Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

The export declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the import declaration or dynamic import. The value of an imported binding is subject to change in the module that exports it — when a module updates the value of a binding that it exports, the update will be visible in its imported value.

In order to use the export declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding type="module" to the tag, or by being imported by another module. Modules are automatically interpreted in strict mode.

```js
export const shippingCost = 10;
export let cart = [];

export const addCart = (product, quantity) => {
  const newCartArray = [...cart, product, quantity];

  cart = newCartArray;
  console.log(cart);
  console.log(`${quantity} ${product} added to cart`);
};

// "as" can change name variable
const totalPrice = 237;
const totalQuantity = 10;
export { totalPrice, totalQuantity as qty };
```

#### Export Default

```js
export default function (product, quantity) {
  const newProduct = { product, quantity };

  // Functional Programming
  const newCartArray = [...cart, newProduct];
  cart = newCartArray;

  console.log(`${quantity} ${product} added to cart`);
}
```

[Next: Top Level Await](./top-level-await.md)
