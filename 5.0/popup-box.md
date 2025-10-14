## Pop up box

- [alert](#alert)
- [prompt](#prompt)
- [confirm](#confirm)

#### alert

```js
alert(`Hello World`); // pop box hello world
```

#### prompt

```js
prompt(`masukan namamu disini 😃`);
```

```js
var nama = prompt(`masukan namamu disini 😃`);
alert(` hallo ${nama}`); // alert hallo nama yang diipnut
```

#### confirm

```js
var tes = confirm(`kamu yakin ?`); // nilai baliknya adalah true :false

if (tes === true) {
  alert(`file berhasil dihapus`);
} else {
  alert(`operasi dibatalkan`);
}
```

```js
alert(`Welcome`);
var lagi = true;

while (lagi) {
  var nama = prompt(`masukan nama`);
  alert(`hello ${nama}`);

  lagi = confirm(`mau lagi?`); // kalau true akan ,melakukan penulangan
}
alert(`terima kasih ${nama}`);
```
