## Optional Chaining (.?)

The optional chaining operator (?.) is used to safely access a property or call a method. If the object or property preceding the ?. operator is null or undefined, the expression "short-circuits" and immediately evaluates to undefined, without throwing an error. This eliminates the need for explicit null or undefined checks using if statements or ternary operators.

```js
// Optional Chaining
console.log(restaurant.openingHours?.mon?.open); // undefined because mon? is undefined

const days = [`mon`, "tue", `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;

  console.log(`on ${day} we are open at ${open}`);
}

// On Methods
console.log(restaurant.orderRissoto?.(0, 1) ?? `method does not exist`);

// On Arrays
const userArr = [{ name: `Bani`, email: `bani@exm.io` }];

console.log(userArr[0]?.name ?? `user array empty`);
```
