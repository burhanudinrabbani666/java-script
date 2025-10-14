# Control Flow

1. Normal Flow
   Apabila program kita memiliki lebih dari satu stetment, maka statement tersebut akan dieksekusi dari **atas ke bawah** atau **kiri ke kanan**.

```js
alert(``); // ⬇️
alert(``); // ⬇️
alert(``); // ⬇️
alert(``); // ⬇️
```

2. Loop / iteration

```js
for()
while()
do while()
```

```js
console.log(`mulai`);
for (var index = 0; index < 5; index++) {
  console.log(`Hello world`);
}
console.log(`selesai`);
```

3. percabangan

```js
if{}
else if{}
else{}
```

```js
var x = 4;

if (x < 5) {
  // jika variablenya true
  console.log(`Benar`);
} else {
  // jika variablenya salah
  console.log(`salah`);
}
```

## pengulang / loop / iteration

### while

Dalam JavaScript, while loop adalah pernyataan alur kontrol yang mengeksekusi blok kode secara berulang selama kondisi yang ditentukan tetap **benar**. Kondisi dievaluasi sebelum tiap iterasi loop.

```js
while (condition) {
  // selama kodisi true
  action; // lakukan action didalam box
}
```

> ⚠️ hati-hai terjebak infinte loop.

**while yang ditentukan oleh user**

```js
var ulang = true; // nilai awal true
while (ulang) {
  alert(`Hello World!`);
  ulang = confirm(`apakah ingin lagi?`); // pengulangan ditentukan user
  //menekan ok (true) jika tidak(false)
}
```

**while ditentukan oleh program**

- memerlukan variable untuk nilai awal
- kondisi seperti apa: true / false
- increment / decrament

```js
variable; // nilai awal
while (kondisi) {
  //condition
  aksi;
  increment / decrement; // yang menyebabkan loop berhenti
}
```

```js
var x = 1; // deklarasi nilai awal variable
while (x <= 5) {
  //kondisi
  console.log(`hello world`);
  x++; // increment
}
console.log(`done`);
```

```js
var x = 10; // deklarasi nilai awal
while (x > 0) {
  //kondisi
  console.log(`hello world ${x}`);
  x--; // decrement
}
console.log(`done`);
```

### for
