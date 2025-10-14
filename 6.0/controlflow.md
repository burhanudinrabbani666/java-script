## Control Flow

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
