## Strings

```js
const airline = `TAP air Portugal`;
const plane = `AX123`;

console.log(plane[0]); // A
console.log(plane[1]); // X
console.log(plane[2]); // 1
console.log(`Bani`[3]); // i

console.log(airline.length); // 16
console.log(`Bani`.length); // 4

// indexOf
console.log(airline.indexOf(`P`)); //2//first occurance
console.log(airline.lastIndexOf(`P`)); //8//last occurance
console.log(airline.indexOf(`Portugal`)); //8
```

#### .slice()

The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth character through the eighth character (characters indexed 4, 5, 6, and 7):

```js
// slice
console.log(airline.slice(4)); // air portugal
console.log(airline.slice(8)); // Portugal
console.log(airline.slice(0, 8)); // TAP air //start index[0] adn end index[8]

// extract the first word without hardcode
console.log(airline.slice(0, airline.indexOf(` `))); // first word
console.log(airline.slice(airline.lastIndexOf(` `) + 1)); // Last word
```

```js
// example case
const checkMiddelSeat = function (seat) {
  // B and E is middle seat
  const s = seat.slice(-1);

  s == `B` || s == `E`
    ? console.log(`your got the middle Seat 😥`)
    : console.log(`Your got lucky 🥳`);
};

checkMiddelSeat(`11B`); // your got the middle Seat 😥
checkMiddelSeat(`23C`); // Your got lucky 🥳
checkMiddelSeat(`14E`); // your got the middle Seat 😥
```
