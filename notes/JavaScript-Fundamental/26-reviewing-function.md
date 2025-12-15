# Function

## 3 Differen function types

### declaration functions

function that can be used before its declared.

```js
function calcAge(birthYear) {
  return 2025 - birthYear;
}
```

### Expression function

Essentially a function value stored in a variable

```js
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
```

### Arrow functions

Great for quick on-line functions. has no this keyword

```js
const calcAge = (birthYear) => 2025 - birthYear;
```

[Next: Array](./27-array.md)
