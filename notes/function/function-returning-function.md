```js
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet(`Hi`); // this value becoming function

greeterHey(`Bani`); // Hi, bani
greeterHey(`Nico`); // Hi, Nico

greet(`Hello`)(`Nurasia`); // Hello, Nurasia
```

- Arrow Function

```js
const greet2 = (greeting) => {
  return (name) => console.log(`${greeting}, ${name}`);
}; // My Work
greet2(`Adili`)(`Jokowi`); // Adili, Jokowi

const greet3 = (greeting) => (name) => console.log(`${greeting}, ${name}`); // Jonas Work
greet3(`Hola`)(`Senorita`); // Hola, Senorita
```
