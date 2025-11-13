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

#### split

The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the **array.**

```js
console.log(`a+very+nice+string`.split(`+`)); // [ "a", "very", "nice", "string" ]``
```

#### join

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

```js
const capitalizeName = function (name) {
  const nameArr = name.trim().split(` `);
  const newNameCapt = [];

  for (const nameWord of nameArr) {
    newNameCapt.push(nameWord.replace(nameWord[0], nameWord[0].toUpperCase()));
  }

  console.log(newNameCapt.join(` `));
};

capitalizeName(`burhanudin rabbani aurelius`);
capitalizeName(`alexander agus napoleon khan`);
```

#### padding. padStart() and padEnd()

The padStart() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the start of this string.

The padEnd() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the end of this string.

```js
const message = `Go to Gate 23!`;
console.log(message.padStart(20, `*`).padEnd(`35`, `*`));
console.log(`Nuraisa`.padStart(20, `*`).padEnd(`35`, `*`));

const massCreditCard = function (number) {
  const strNumber = number + ``; //  convert oprand to stirng
  const lastNumber = strNumber.slice(-4);
  return lastNumber.padStart(strNumber.length, `*`);
};

console.log(massCreditCard(5126451749189)); // *********9189
```

#### repeat()

The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

```js
const message2 = `Bad Weather... All depatures delayed-- `;
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`They are ${n} planes in line ${`✈️`.repeat(n)}`);
};
```
