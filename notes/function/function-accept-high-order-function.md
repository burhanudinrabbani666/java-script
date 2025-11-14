## Function Accepting Callback Function

```js
// FUNCTION ACCEPTING CALLBACK FUNCTION

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(` `);
  return [first.toUpperCase(), ...other].join(` `);
};

// HIGH ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transform string: ${fn(str)} `);

  console.log(`Transform by ${fn.name}`); // upperFirstWord
};

transformer(`JavaSript is the best`, upperFirstWord); // callback
console.log(`------------`);
transformer(`JavaSript is the best`, oneWord); // callback

const high5 = function () {
  console.log(`🖐️`);
};

document.body.addEventListener(`click`, high5);
```
