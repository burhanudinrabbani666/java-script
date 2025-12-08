// Export module
console.log("Exporting Module");

export const shippingCost = 10;
export let cart = [];

export const addCart = (product, quantity) => {
  const newCartArray = [...cart, product, quantity];

  cart = newCartArray;
  console.log(cart);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 10;
export { totalPrice, totalQuantity as qty };
// "as" can change name variable

// Export Default
export default function (product, quantity) {
  const newProduct = { product, quantity };

  // Functional Programming
  const newCartArray = [...cart, newProduct];
  cart = newCartArray;

  console.log(`${quantity} ${product} added to cart`);
}
