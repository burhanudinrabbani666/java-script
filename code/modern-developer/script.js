// Importing Modules

/*
import "./shoppingCrat.js";
import {
  shippingCost,
  cart,
  addCart,
  totalPrice as price,
  qty,
} from "./shoppingCrat.js";

console.log(shippingCost);
console.log(cart);

addCart("BMW", 1);
console.log(price, qty);

// Export Multuaple Value
import * as ShoppingCart from "./shoppingCrat.js";
ShoppingCart.addCart("Milk", 10);
console.log(ShoppingCart.totalPrice, ShoppingCart.qty);
*/

console.log("Importing Module");

// Dont mix like this. make more clear
import add, { cart } from "./shoppingCrat.js";

add("mie Ayam", 2);
add("Bakso", 3);
add("Gudeg", 4);

console.log("This is Cart", cart);
