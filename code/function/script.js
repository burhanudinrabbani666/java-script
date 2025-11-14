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
*/

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
