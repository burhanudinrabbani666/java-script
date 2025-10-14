// no.1
let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

// no.2
let a = 10;
while (a >= 1) {
  console.log(a);
  a--;
}

//no.3
let b = 0;
let c = 0;
while (b <= 5) {
  c += b;
  b++;
}
console.log(c);

//no.4
let jawaban = prompt("Ketik 'ya' untuk lanjut:");
while (jawaban !== "ya") {
  jawaban = prompt("Salah! Ketik 'ya' untuk lanjut:");
}
console.log("Terima kasih!");

//no.5
let d = 0;
while (d <= 20) {
  console.log(d);
  d = d + 2;
}
