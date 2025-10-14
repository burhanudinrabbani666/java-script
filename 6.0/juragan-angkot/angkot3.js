let angkotBeroperasi = 6;
let jmlAngkot = 10;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`Agnkot no.${noAngkot} beroperasi dengan baik`);
  } else {
    console.log(`Angkot No.${noAngkot} tidak beroperasi.`);
  }
}
