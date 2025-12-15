"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// if we are not use strict mode this bug is not detected
// and code its just running but nothing nformation about that
if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log(`I can Drive`);

// const interface = "Audio";
// const private = 534;
// const if =23
*/

// Function

function logger() {
  console.log("Hello World");
}

logger();

function fruitProccesor(apples, oranges) {
  const juice = `Juice with ${apples} apple and ${oranges} oranges`;

  return juice;
}

const appleJuice = fruitProccesor(3, 7);
console.log(appleJuice);
