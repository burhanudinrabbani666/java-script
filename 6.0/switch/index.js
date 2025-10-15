// switch (ekspresi) {
//   case `nilai 1`:
//     console.log(); // aksi
//     break;
//   case `nilai2`:
//     console.log();
//     break;
//   default:
//     break;
//   // break membuat langsun keluar dari pengulangan
// }

// let x = "5";

// switch (x == 5) {
//   case x === 5:
//     console.log(`Hello World`);
//     break;
//   case x == 5:
//     console.log(`Hello ${x}`);

//   default:
//     break;
// }

var validatedHalal = "onta";

switch (validatedHalal) {
  case "kurma":
  case "air zam-zam":
  case "indomie":
    console.log("halal ✅");
    break;

  case "babi":
  case "alcohol":
  case "judi":
    console.log("Haram ❎");

  default:
    console.log("mending jadi kapal laut ⛴️");

    break;
}
