`strict mode`;

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

// cant adding the new object
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure Function {}
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Netflix 🍿",
  "Matilda"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);
// --------------------- //

function checkExpenses(state, limits) {
  const updateData = state.map((entry) => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, limit: "flag" }
      : entry;
  });

  return updateData;
}

// for (const entry of state)
// if (entry.value < getLimit(limits, entry.user)) entry.flag = "limit";

const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);
function bigExpenses(state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => {
      return entry.value <= -bigLimit;
    })
    .map((entry) => {
      return entry.description.slice(-2);
    })
    .join(" / ");

  console.log(bigExpenses);

  // let output = "";
  // for (const entry of newBudget3) {
  //   output +=
  //     entry.value <= -bigLimit
  //       ? `${entry.description.slice(-2)} / ` // Emojis are 2 chars
  //       : "";
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
}

// console.log(finalBudget);
bigExpenses(finalBudget, 500);
