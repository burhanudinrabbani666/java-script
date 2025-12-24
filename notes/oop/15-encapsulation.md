## Encapsulation

encapsulation basically means to keep sme properties and methods private inside the class. so that they not acessible from outside the class. We simply expose some of the method as a public interface, which we call an API.

big reason why we need data encapsulation and data privacy:

1. prevent code from outside a certain class to accidentally manipulate our data that live inside the class.
2. when we only expose the small data interface, so that small API just consising of a few public methods, than we can change all the other interal methods inside the class with a lot more confidence. because we can be sure that external code does not rely on these methods, so code not will break when we do these internal changes.

```js
// Encapsulation: Private Class Fields and Methods

// 1. Public  Fields
// 2. Private Fields
// 3. Public  Methods
// 4. Private Methods
// STATIC version of these 4

class Account {
  // Public Fields
  locale = navigator.language;
  bank = "Bankist";

  // Private Fields // Use #
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movement = [];
    // this.local = navigator.language;

    console.log(`Thanks to opening an account. ${this.owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
  }

  // Private Method
  #approveLoan() {
    // Fake Method
    return true;
  }

  // Pbulic Method
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.approveLoan) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static test() {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(500);
acc1.withdraw(233);

console.log(acc1);
// console.log(acc1.#movements); // reference to undeclared private field or method #movements

// console.log(Account.test());
```

[Next: Chaining Methods](./16-chaining-methods.md)
