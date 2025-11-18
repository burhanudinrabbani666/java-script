`use strict`;

/*
//  DEAULT PARAMETERS

const bookings = [];

const createdBooking = function (
  flightNum,
  numPassengers = 1, // Default Value
  price = 199 * numPassengers // Default Value
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

createdBooking(`Lh123`, 3);
createdBooking(`Lh123`, 6);
createdBooking(`Lh123`, 10);

const flight = `LH123`; // primitve
const bani = {
  name: "Burhanudin rabbani",
  passport: 123456789,
};

const checkin = function (flightNum, passengers) {
  flightNum = `LH456`;
  passengers.name = `Mr.` + passengers.name;

  passengers.passport === 123456789
    ? console.log(`Check In`)
    : console.log(`Wrong Passport`);
};

checkin(flight, bani);
console.log(flight); // didn't change
console.log(bani); // change
//
// same as doing this...
const flightNum = flight;
const passengers = bani;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(bani);
checkin(flight, bani); // wrong passport

// FIRST CLASS AND HIGHER ORDER FUNCTION
// FUNCTION ACCEPTING CALLBACK FUNCTION

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(` `);
  return [first.toUpperCase(), ...other].join(` `);
};

// HIGH ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transform string: ${fn(str)} `);

  console.log(`Transform by ${fn.name}`); // upperFirstWord
};

transformer(`JavaSript is the best`, upperFirstWord); // callback
console.log(`------------`);
transformer(`JavaSript is the best`, oneWord); // callback

const high5 = function () {
  console.log(`🖐️`);
};

document.body.addEventListener(`click`, high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet(`Hi`); // this value becoming function

greeterHey(`Bani`); // Hi, bani
greeterHey(`Nico`); // Hi, Nico

greet(`Hello`)(`Nurasia`); // Hello, Nurasia

const greet2 = (greeting) => {
  return (name) => console.log(`${greeting}, ${name}`);
}; // My Work
greet2(`Adili`)(`Jokowi`); // Adili, Jokowi

const greet3 = (greeting) => (name) => console.log(`${greeting}, ${name}`); // Jonas Work
greet3(`Hola`)(`Senorita`); // Hola, Senorita
// Call and apply method

const luthansa = {
  airline: `Luthansa`,
  iataCode: `LH`,
  bookings: [],

  booking: function (flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    console.log(this);
  },
};

const euroWings = {
  airline: `Euro Wings`,
  iataCode: `EU`,
  bookings: [],
};

const swiss = {
  airline: `Swiss Air Line`,
  iataCode: `LX`,
  bookings: [],
};

luthansa.booking(123, `Burhanudin`);
luthansa.booking(124, `Nuraisa`);
console.log(luthansa);

// take other method
const book = luthansa.booking; // "this" in here is point to nothing

// CALL
book.call(euroWings, 123, `Rabbani`);
console.log(euroWings);

book.call(luthansa, 125, `Jokowi`);
console.log(luthansa);

book.call(swiss, 123, `Jokowi`);
console.log(swiss);

// APPLY METHOD
const flightData = [583, `M. Salah`];
book.apply(swiss, flightData);
console.log(swiss);

// Bind Method

const bookEW = book.bind(euroWings);
const bookLH = book.bind(luthansa);
const bookSW = book.bind(swiss);

bookEW(233, `Steven Bani`);

const bookEW23 = book.bind(euroWings, 233);

// With Event Listener
luthansa.planes = 300;
luthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", luthansa.buyPlane.bind(luthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(50));
console.log(addVAT(23));

const addTaxRate = (rate) => (value) => value + value * rate;

const adddVat2 = addTaxRate(0.23);
console.log(adddVat2(100));

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),

  regiterNewAnswer: function () {
    const PromptAnswer = prompt(
      `${this.question} \n${this.options.join(
        `\n`
      )} \n (Write Option in Number)`
    );

    Number(PromptAnswer) < this.answers.length
      ? this.answers[PromptAnswer]++
      : console.log(`Wrong Answer`);

    this.displayResults(this.answers);
  },

  displayResults: (value = "array") => {
    typeof value == "string"
      ? console.log(`Poll results are`, value.split(`,`).join(`,`))
      : console.log(`Poll results are`, value.join(`, `));
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.regiterNewAnswer.bind(poll));

poll.displayResults("5, 2, 3");
poll.displayResults([5, 2, 3]);
poll.displayResults([1, 5, 3, 9, 6, 1]);
poll.displayResults("1, 5, 3, 9, 6, 1");

const runOnce = function () {
  console.log(`this function only runing for once`);
};

(function () {
  console.log(`this () function only runing for once`);
})();

(() => {
  console.log(`This is Also only Once`);
})();

{
  isPrivate: 23;
  var globe = 14;
}
console.log(globe);
*/
