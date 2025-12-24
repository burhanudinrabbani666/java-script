## Another Class Example

```js
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.pin = pin;
    this.currency = currency;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thank For Opening Account ${owner}`);
  }

  deposite(value) {
    if (!value) return;

    this.movements = [...this.movements, value];
  }

  withdrawal(value) {
    this.deposite(-value);
  }

  approveLoan() {
    return true;
  }

  requestLoan(value) {
    if (this.approveLoan) {
      this.deposite(value);

      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account("jonas", "EUR", 1111);

// Using API
acc1.deposite(230);
acc1.withdrawal(1400);

acc1.requestLoan(10000);

console.log(acc1);
console.log(acc1.pin);
```

[Next: Encapsulation](./15-encapsulation.md)
