## Setter and Getter

```js
const account = {
  owner: "Jonas",
  movements: [200, 300, 120, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // get latest

account.latest = 250; // set latest
console.log(account.movements);
```
