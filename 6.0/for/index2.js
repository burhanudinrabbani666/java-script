// var m = ``;
// for (let index = 0; index < 5; index++) {
//   for (let a = 0; a < index; a++) {
//     m += ` `; // mengurangi spasi
//   }
//   for (let b = 0; b < 5 - index; b++) {
//     m += "*";
//   }

//   m += "\n";
// }

// console.log(m);

let x = ``;

for (let index = 1; index <= 5; index++) {
  for (let a = 0; a < 5 - index; a++) {
    x += ` `;
  }
  for (let b = 1; b < 2 * index; b++) {
    x += "*";
  }
  x += `\n`;
}

console.log(x);
