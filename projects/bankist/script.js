"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = [`a`, `b`, `c`, `d`, `e`];

// slice
console.log(arr.slice(1, 3)); // [`b`, `c`]
console.log(arr.slice(0, -1)); // [ "a", "b", "c", "d" ]
console.log(arr.slice(4)); // [ "e" ]
console.log(arr.slice(-3, -1)); // [`c`, `d`]

console.log(arr.slice()); // same to copy array
console.log([...arr]);

// Splice
arr.splice(-1);
console.log(arr, `this is original`); // [ "a", "b", "c", "d" ]

// change array value
arr.splice(1, 0, `X`); // Insert at index 1
console.log(arr); // [ "a", "X", "b", "c", "d" ]

arr.splice(2, 1, `Uhuy`); // replace element 1 at index 2
console.log(arr, `Change`); //[ "a", "X", "Uhuy", "c", "d" ]

// REVERSE
arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`i`, `j`, `k`, `l`, `m`];

console.log(arr2.reverse()); //[ "m", "l", "k", "j", "i" ]
console.log(arr2); // mutate the original array

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(`-`)); // a-b-c-d-e-m-l-k-j-i
*/

const arr = [23, 1234, 666];
console.log(arr[0]); // traditional
console.log(arr.at(0)); // more symantix and modern

// last value
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // 666
console.log(arr.at(-2)); // 1234

console.log(`Bani`.at(0)); // B
console.log(`Bani`.at(-1)); // i
