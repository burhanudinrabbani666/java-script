for (let index = 1; index <= 10; index++) {
  console.log(index);
}

console.log("------");

for (let index = 2; index <= 20; index += 2) {
  console.log(index);
}

console.log("------");

let total = 0;
for (let index = 0; index <= 5; index++) {
  total += index;
}
console.log(total);

console.log("------");

let a = 5;
let b = 0;
for (let index = 1; index <= 10; index++) {
  b = index * a;
  console.log(`${index} x ${a} = ${b}`);
}
