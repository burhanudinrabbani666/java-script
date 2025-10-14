# Java Script

### Tipe data

- number = 1, 2, 4, 100
- string = "hello" / 'hello' / `hello`
- boolean = true : false
- object = {}
- function = function name(parameters){}
- undefined = undefined

## Number

bisa menyimpan angka apa saja?

| tipe                 | contoh            |
| -------------------- | ----------------- |
| angka tanpa desimal  | 1, 2, 50,1000     |
| angka dengan desimal | 3.14, 0.5, 100.99 |
| Eksponen             | 123e5 //123000    |
| Negative             |                   |

| angka special | contoh             |
| ------------- | ------------------ |
| infinity      | 2 / 0 // infinity  |
| -infinity     | -2 / 0 // -infinty |
| NaN           | Not a Number       |

> ⚠️ jangan memulai dari angka 0, karna dianggapp bilangan oktaf.

## Operator

**operator** dalam JavScirpt adalah sebuah **simbol** yang digunakan untuk melakukan **operasi**

**operator** ⬇️

| binary       | ternary     | unary  |
| ------------ | ----------- | ------ |
| aritmatika   | kondisional | typeof |
| penugasan    |             |        |
| perbandingan |             |        |
| logika       |             |        |
| string       |             |        |
| kondisional  |             |        |
| typeof       |             |        |

> binary membutuhakn 2 operand ➡️ opernad1 **operator** **operand2**

> unary membutuhkan 1 operand ➡️ operator operand atau sebaliknya

> ternary membutuhkan 3 operand

### operator aritmatika

[ +, -, \*, /, % ]

### opartor penugasan / assignment

[ =, +=, -=, /=, %= ]

```js
var x = 10;
```

| operator penugasan | sama saja dengan |
| ------------------ | ---------------- |
| x += y             | x = x + y        |
| x -= y             | x = x - y        |
| x \*= y            | x = x \* y       |
| x /= y             | x = x / y        |
| x %= y             | x = x % y        |

### perbandingan dan boolean

**operator perbandingan** hasilnya **operator boolean**

| operator perbandingan | keterangan               |
| --------------------- | ------------------------ |
| ==                    | sama dengan              |
| !=                    | tidak sama dengan        |
| ===                   | strict sama dengan       |
| !==                   | strict tidak sama dengan |
| >                     | lebih besar dari         |
| <                     | lebih kecil dari         |
| >=                    | lebih besar sama dengan  |
| <=                    | lebih kecil sama dengan  |

```js
var x = 10;
console.log(x == 10); // true

var x = 12;
console.log(x != 10); // true
```

### logika / logical

| operator logika | keterangan |
| --------------- | ---------- |
| &&              | AND        |
| !!              | OR         |
| !               | NOT        |

```js
var x = 10;
console.log(x < 20 && x == 10); // true
console.log(x < 10 && x % 2); // false
// && butuh semua benar untuk mendapatkan true

var x = 20;
console.log(x % 2 == 0 || x < 10); // cukup stau yang benar untuk true

var x = 10;
console.log(!x == 10); // false
```

### String

( + ) menggabungkan kalimat.

```js
var x = "Hello ";
var y = "World!";
console.log(x + y); // Hello World!

var x = "10";
var y = 10;
var z = 10;

console.log(x + y + z); // 101010
console.log(y + z + x); // 2010
```

### Typeof

untuk mengetahui type data

```js
var x = 10;
var y = "Hello World!";
var z = true;

console.log(typeof x); // number
console.log(typeof y); // string
console.log(typeof z); // boolean
```

### kondisional

> membutuhkan 3 operand

```js
var x = 10;
console.log(x % 2 == 0 ? "genap" : "ganjil"); // gena
```

## String

tipe data **String** dalam JavaScript digunakan untuk merepresentasikan **data tekstual**/ plain text.

> "", '', ``

```js
"Hello World!";
"Hello World!"`Hello World!`; // paling rekomendasi
```

```js
console.log(`Hello World! Im "Pro" col`);
```

## boolean

sebuah tipe data yang merepresentasikan logika **true** atau **false**. biasanya digunakan pada statment pengkondisian, untuk menentukan aksi yang berbeda dan mengatur alur pengendalian.

```js
true : false

var x = 10;
console.log(x == 10); // true

console.log(Boolean(10 < 20)); // menggunakan function Boolean
```

| truthy          | falsy     |
| --------------- | --------- |
| true            | false     |
| non-zero number | 0         |
| "string'        | ""        |
| object          | undefined |
| array           | null      |
| Functions       | NaN       |

> undefined adalah deklarasi sebuah variable tapi belum diisi nilai ⬇️

```js
var x=; // undefined
```

> null nilai kosong yang bisa di berikan ke variable ⬇️

```js
var x = null; // null
```

## variable

sebuah **tempat atau wadah** yang memiliki nama, yang digunakan untuk menyimpan nilai.

> deklarasi, inisialisasi, assignment

    Deklarasi   = mendaftarkan ke dalam lingkup yang sesuai
    ⬇️
    inisialisai = menyediakan memori unutk variable
    ⬇️
    assignment  = menetapkan nilai yang spesifik unutk disimpan

```js
var x; // deklarasi & inisialisasi
x = 20; // assigment
```

| Deklarasi | Fungsi                                                                                                                                                                                                                                                                                                                              |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `var`     | ✅ Dapat di-reassign (nilainya bisa diubah) <br> ✅ Dapat dideklarasikan ulang (bisa `var` lagi dengan nama sama) <br> ⚠️ _Scope_: **function-scoped** (tidak mengenal block scope seperti `if` atau `for`) <br> ⚠️ _Hoisting_: dideklarasikan ke atas tapi tanpa nilai (`undefined`) <br> ⚠️ Mudah bikin bug kalau tidak hati-hati |
| `let`     | ✅ Dapat di-reassign <br> ❌ Tidak dapat dideklarasikan ulang dalam scope yang sama <br> ✅ _Scope_: **block-scoped** (`{ ... }`) <br> ✅ Tidak mengalami hoisting dengan cara lama (_TDZ — temporal dead zone_)                                                                                                                    |
| `const`   | ❌ Tidak dapat di-reassign <br> ❌ Tidak dapat dideklarasikan ulang <br> ✅ _Scope_: **block-scoped** <br> ⚠️ Nilainya tidak harus _immutable_ — object & array masih bisa dimodifikasi isinya, tapi referensinya tidak bisa diganti                                                                                                |

**aturan menuliskan variable**

- tidak boleh pake spasi.
- tidak boleh memulai nama variable dengan angka.
- menggunakan cammelCase supaya profesional.

```js
var thisIs; // camelCase
```

- tidak boleh menggunakan keyword atau reserved word

**shorthand**

```js
var nama = "bani",
  umur = 22,
  lulus = true;
```

**variable scope**
