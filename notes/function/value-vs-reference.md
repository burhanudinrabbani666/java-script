## Value vs Reference

```js
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
```

JavaScript does not have passing by reference, only passing by value, even though its look like it's passing by reference.

languages like C++, where you can pass a reference to any value, instead the value itself. This work even with primitive, so you could pass a reference to the value of five, and the original value **outside of the function**, would be changed. and this is called pass by reference.

but once again, JavaScript doesnot have pass by reference.

```js
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(bani);
checkin(flight, bani); // wrong passport
```
