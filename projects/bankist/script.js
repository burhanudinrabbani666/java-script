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
  type: `Premium`,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: `Premium`,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: `Basic`,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: `Standar`,
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
        <div class="movements__value">${movement}€</div>
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

  labelBalance.textContent = `${account.balance} EUR`;
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

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${interest}€`;
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

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
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

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username == inputTransferTo.value
  );
  console.log(amount, receiverAccount);

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

  const amount = Number(inputLoanAmount.value);

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
    Number(inputClosePin.value) == currentAccount.pin
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

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// 1.
const bankDepostiSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepostiSum);

// 2.
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((num, mov) => (mov >= 1000 ? ++num : num), 0); // prefixed ++ operator

// accounts.flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000, ` Movement over 1000`);

// 3.
const { deposits, withdrawal } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposits += cur) : (sum.withdrawal += cur);
      sum[cur > 0 ? "deposits" : "withdrawal"] += cur;
      return sum;
    },
    { deposits: 0, withdrawal: 0 } // make new object
  );

console.log(deposits, withdrawal);

// 4.

const converTitleCase = (title) => {
  const capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

  const exceptions = [`a`, `an`, `and`, `the`, `or`, `but`, `on`, `in`, `with`];

  const titleCase = title
    .toLowerCase()
    .split(` `)
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(` `);

  return capitalize(titleCase);
};

console.log(converTitleCase(`this is a nice title`));
console.log(converTitleCase(`this is a LONG title but not too long`));
console.log(converTitleCase(`and here is another title with an EXAMPLE`));
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

//2.

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
const isEatingToMuch = sarahDog.curFood > sarahDog.recommendedFood;
console.log(isEatingToMuch);

// 3.

const ownersEatToMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood);
const ownersEatToLittle = dogs.filter(
  (dog) => dog.curFood < dog.recommendedFood
);

// 4.

console.log(
  `${ownersEatToMuch.flatMap((dog) => dog.owners).join(` and `)} Eat to much`
);
console.log(
  `${ownersEatToLittle
    .flatMap((dog) => dog.owners)
    .join(` and `)} Eat to little`
);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

//6.
console.log(
  dogs.some(
    (dog) =>
      dog.curFood < dog.recommendedFood + dog.recommendedFood * 0.1 &&
      dog.curFood > dog.recommendedFood - dog.recommendedFood * 0.1
  )
);

const okayAmount = dogs.filter(
  (dog) =>
    dog.curFood < dog.recommendedFood + dog.recommendedFood * 0.1 &&
    dog.curFood > dog.recommendedFood - dog.recommendedFood * 0.1
);

const copyDogs = dogs.slice();

console.log(copyDogs);
