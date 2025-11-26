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
    "2025-11-20T17:01:17.194Z",
    "2025-11-23T23:36:17.929Z",
    "2025-11-25T10:51:36.790Z",
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
    "2025-06-26T14:43:26.374Z",
    "2025-06-27T18:49:59.371Z",
    "2025-11-24T12:01:20.894Z",
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

// FAKE ALLWAYS LOGIN

// Function

const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovement = (acc, sort = false) => {
  // text Content = 0
  containerMovements.innerHTML = ``;

  const combineMovements = acc.movements.map((mov, index) => {
    return {
      movement: mov,
      movementDate: acc.movementsDates.at(index),
    };
  });

  if (sort) combineMovements.sort((a, b) => a.movement - b.movement);

  // for display all data
  combineMovements.forEach((obj, index) => {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? `deposit` : `withdrawal`;

    // date
    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, acc.locale);

    // Currency internationaliize
    const formattedMov = formatCur(obj.movement, acc.locale, acc.currency);

    new Intl.NumberFormat(acc.locale, {
      style: "currency",
      currency: acc.currency,
    }).format(obj.movement);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
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

  labelBalance.textContent = formatCur(
    account.balance,
    account.locale,
    account.currency
  );
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
    .filter((int) => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  labelSumOut.textContent = formatCur(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  );

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const updateUI = (acc) => {
  // Display movements
  displayMovement(acc);

  // Display balance
  printBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};
const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  // `${day}/${month}/${year}`;

  return Intl.DateTimeFormat(locale).format(date);
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

    const currentDate = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(currentDate);

    // current date
    // const day = `${currentDate.getDate()}`.padStart(2, 0);
    // const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    // const year = currentDate.getFullYear();
    // const hour = `${currentDate.getHours()}`.padStart(2, 0);
    // const min = `${currentDate.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
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

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

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

  //add transfer date
  currentAccount.movementsDates.push(new Date().toISOString());

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
  displayMovement(currentAccount, !sortedState);
  sortedState = !sortedState;
});
/////////////////////////////////////////////////

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//day/month/year
/////////////////////////////////////////////////
// LECTURES

const num = 12345678.12;
const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};

console.log("US:     ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany:", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:  ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  ": ",
  new Intl.NumberFormat(navigator.language, options).format(num)
);
