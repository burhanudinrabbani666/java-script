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

console.log("Importing Module");

// Blocking Code
// console.log("Strat Feching Data");
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Finish Fecth");

// Dont mix like this. make more clear
import add, { cart } from "./shoppingCrat.js";

add("mie Ayam", 2);
add("Bakso", 3);
add("Gudeg", 4);
console.log("This is Cart", cart);

// Top Level Await
// ⬇️
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

const getLastPost = async function (params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // <>
  const data = await res.json();

  return {
    title: data.at(-1).title, //
    text: data.at(-1).body,
  };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not Clean
// lastPost.then((res) => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
