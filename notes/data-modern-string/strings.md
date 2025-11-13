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

#### toLowerCase() and toUpperCase()

The **toLowerCase()** method of String values returns this string converted to lower case.

The **toUpperCase()** method of String values returns this string converted to uppercase.

```js
// toLowerCase and toUpperCase
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// fix capitalize
const passenger = `bAnI`; // fix to Bani
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Bani

function fixName(name) {
  const nameToLower = name.toLowerCase();
  const nameCorrect = nameToLower[0].toUpperCase() + nameToLower.slice(1);
  console.log(nameCorrect);
}
```

#### trim

The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

```js
// comparing email

const email = `bani@exm.co`;
const loginEmail = `   BanI@EXm.cO \n `;

const loginEmailLower = loginEmail.toLowerCase();
const trimEmail = loginEmailLower.trim();
console.log(trimEmail); // bani@exm.co

// short way using chaining
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail); // bani@exm.co
```

#### replace() & replaceAll()

**The replace() method** of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

**The replaceAll() method** of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

```js
// Replacing
const priceGB = `288,97£`;
const priceUS = priceGB.replace(`,`, `.`).replace(`£`, `$`);
console.log(priceUS);

const announcment = `All passenger come to boarding door 23, boarding door 23, boarding door 23!`;
console.log(announcment.replaceAll(`door`, `gate`));
```

#### satrWith() and endWith()

```js
// startWith and endWith

const newPlane = `Airbus AB666neo`;

console.log(newPlane.includes`AB6`); // true
console.log(newPlane.includes`boeing`); ///false

console.log(newPlane.startsWith(`Air`)); // true

newPlane.startsWith(`Air`) && newPlane.endsWith(`neo`)
  ? console.log(`Part of the New Aribus Family`)
  : console.log(`not part  of the New Aribus Family`);
```

```js
// example
const checkBadge = function (item) {
  const baggage = item.toLowerCase();
  baggage.includes(`gun`) || baggage.includes(`knife`)
    ? console.log(`your not allowed on board`)
    : console.log(`welcome on the board`);
};

checkBadge(`I have a Laptop, some Food and a Pocket Knife`);
checkBadge(`i have Sock and Camera`);
checkBadge(`got some a Snack and Gun for protection`);
```
