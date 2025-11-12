## Short circuiting ( && And || )

can use **ANY** Data type, return **ANY** data type, short circuiting

### OR ||

if the first value is truthy value, it will immadeatly retunr that first value.

```js
console.log(`Bani` || 3); // Bani
console.log(`` || `Bani`); // Bani
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || null || `` || 0 || `Bani` || 23); // Bani // Because Bani is the first truthy value

// case
restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// More short
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23
```

### AND

The AND operator shirt circuits, when the first value is falsy, and then immediatly returns that falsy value without even evaluating the second operand

```js
// AND
console.log(0 && `Bani`); // 0
console.log(`Bani` && undefined); // undefined
console.log(null && 0);
null;

console.log(`Bani` && 23 && null && `bani`); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "chess");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Chess");
// if the first operand is true the execut next operand
```

> As a practical applications, we can use the OR operator to set default value, and we can use the AND operator to execute code in the second operand, if the first one is true

### NULLISH coalescing operator

NULLISH coalescing operator works with the idea or with the concept of **nullish** value instead of falsy values. nullish value is **null** and **undefined**

```js
restaurant.numGuests = 0;

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0
```

## Logical Assigment Operators

```js
const rest1 = {
  name: " Capri1",
  numGuest: 20,
};

const rest2 = {
  name: " La porta",
  founder: "Asep del piero",
};

// add new property
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

// much shorter
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

// Nullish assigment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assigment
// rest1.founder = rest1.founder === undefined && `<Unknown>`;
// rest2.founder = rest2.founder && `<Unknown>`;

rest1.founder &&= `<Unknown>`; // nothing happen
rest2.founder &&= `<Unknown>`; // founder: <Unknown>

console.log(rest1);
console.log(rest2);
```
