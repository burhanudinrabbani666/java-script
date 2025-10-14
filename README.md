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

        var x = 10

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

        var x = 10;
        console.log(x == 10); // true

        var x = 12
        console.log(x != 10) // true

### logika / logical

| operator logika | keterangan |
| --------------- | ---------- |
| &&              | AND        |
| !!              | OR         |
| !               | NOT        |

        var x = 10;
        console.log(x < 20 && x == 10); // true
        console.log(x < 10 && x % 2); // false
        // && butuh semua benar untuk mendapatkan true

        var x = 20;
        console.log(x % 2 == 0 || x < 10); // cukup stau yang benar untuk true

        var x = 10;
        console.log(!x == 10); // false

### String

( + ) menggabungkan kalimat.

        var x = "Hello "
        var y = "World!"
        console.log(x + y); // Hello World!

        var x = "10";
        var y = 10;
        var z = 10;

        console.log(x + y + z); // 101010
        console.log(y + z + x); // 2010

### Typeof

untuk mengetahui type data

        var x = 10;
        var y = "Hello World!";
        var z = true;

        console.log(typeof x); // number
        console.log(typeof y); // string
        console.log(typeof z); // boolean

### kondisional

> membutuhkan 3 operand

        var x = 10;
        console.log(x % 2 == 0 ? "genap" : "ganjil"); // genap
