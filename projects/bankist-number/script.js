"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Data
let currentAccount;
//

// Function
const displayMovement = (movements, sort = false) => {
  // text Content = 0
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // for display all data
  movs.forEach((movement, index) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__value">${movement.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
const createUserName = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner // add new properti
      .toLowerCase()
      .split(` `)
      .map((word) => word[0])
      .join(``); // ; sign
  });
};

const printBalance = (account) => {
  account.balance = account.movements.reduce((prev, current) => {
    return (prev += current);
  }, 0); // in last

  labelBalance.textContent = `${account.balance.toFixed(2)} EUR`;
};

const calcDisplaySummary = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumOut.textContent = `${Math.abs(outcomes.toFixed(2))}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const updateUI = (acc) => {
  // Display movements
  displayMovement(acc.movements);
  // Display balance
  printBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// Event handler
createUserName(accounts);

btnLogin.addEventListener(`click`, function (event) {
  event.preventDefault(); // stop default behavior

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // display UI and massage
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(` `)[0]
    }`;

    containerApp.style.opacity = 100;
    // Clear Field
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(
    (acc) => acc.username == inputTransferTo.value
  );

  // delete value fields
  inputTransferAmount.value = inputTransferTo.value = ``;

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((movement) => movement >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
  } // 10%

  // update UI
  updateUI(currentAccount);

  inputLoanAmount.value = ``;
});

btnClose.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value == currentAccount.username &&
    +inputClosePin.value == currentAccount.pin
  ) {
    // for searching index
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete fields
    inputCloseUsername.value = inputClosePin.value = ``;

    // delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sortedState = false;
btnSort.addEventListener("click", function (event) {
  event.preventDefault();
  displayMovement(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
console.log(23 == 23.0);

console.log(+"23"); // +
console.log(+"23"); // +

// Parsing
console.log(Number.parseInt("300px", 10)); // 300 string should be start with number

// Float
console.log(Number.parseFloat("2.5rem", 10)); // 2.5
console.log(Number.parseInt("2.5rem", 10)); // 2

// isNaN : boolean
console.log(Number.isNaN("2.5rem")); // false
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN(+"25px")); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite : boolean
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite("20px")); // false
console.log(Number.isFinite(23 / 0)); // false

// MATH and ROUNDING
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 16, 34, 11, 3)); // 34
console.log(Math.max(5, 161, "342", 113, 38)); // 342
console.log(Math.min(5, 16, 34, 11, 3)); // 3

console.log(Math.PI * Number.parseFloat(`10px`) ** 2); //314

console.log(Math.trunc(Math.random() * 6) + 1); /// 1-6

const renderInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// integer Rounding
console.log(renderInt(10, 20));
console.log(renderInt(0, 3));

console.log(Math.trunc(20.5)); // 20
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.9)); // 23
console.log(Math.floor(23.2)); // 23

console.log(Math.trunc(-23.3)); // 23
console.log(Math.floor(-23.3)); // 24 ✅ lebih bagus pakai ini

// decimals rounding
console.log((2.7).toFixed(0)); // 3 //return string
console.log((2.7).toFixed(3)); // 2.700 // return string
console.log((3.123).toFixed(2)); // 3.12 // return string
console.log(+(2.7).toFixed(0)); // 3 return Number
*/
