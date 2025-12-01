## Chaining Methods

always put return in the last methods so can be chaining

```js
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // return this so can chaining methods
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // return this so can chaining methods
  }

  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this; // return this so can chaining methods
  }

// Chaining Methods
acc1
  .deposit(150)
  .withdraw(300)
  .deposit(400)
  .requestLoan(20000)
  .withdraw(400)
  .getMovements(); // place last
```
