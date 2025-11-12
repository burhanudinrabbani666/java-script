## Looping Object : Keys, Values, and Entries

![OpenigHours](/notes/assets/Object.svg)

#### Properti Name / keys

```js
const properties = Object.keys(restaurant.openingHours);
let str = ` we are open on ${properties.length} days:`;

for (const day of properties) {
  console.log(day); // thu fri sat
  str += ` ${day},`;
}

console.log(str);
```

#### Properti Values

```js
// Properties Values
const values = Object.values(openingHours);
console.log(values);
```

#### Properti Entries

```js
// Properties Entries (keys: Value)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and closed at ${close}`);
}
```
