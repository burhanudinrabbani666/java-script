## Another Class Example

```js
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movement = [];
    this.local = navigator.language;

    console.log(`Thanks to opening an account. ${this.owner}`);
  }

  deposit(val) {
    this.movement.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// Dont do manually ❗
// acc1.movement.push(250);
// acc1.movement.push(-140);

// make method first ✅
acc1.deposit(250);
acc1.withdraw(333);

acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);
```
