## Bind Method

```js
const bookEW = book.bind(euroWings);
const bookLH = book.bind(luthansa);
const bookSW = book.bind(swiss);

bookEW(233, `Steven Bani`);

const bookEW23 = book.bind(euroWings, 233);

// With Event Listener
luthansa.planes = 300;
luthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", luthansa.buyPlane.bind(luthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(50));
console.log(addVAT(23));

const addTaxRate = (rate) => (value) => value + value * rate;

const adddVat2 = addTaxRate(0.23);
console.log(adddVat2(100));
```
