## Basic Array Method

### Add Element

### Push

for mutating array. adding property to the last of array

```js
// Push
friends.push(`Rian`);
console.log(friends);
// ['aziz', 'risaldi', 'farhan', 'Rian']
```

### Ushift

for mutating array. adding property to the first of array

```js
// shift
friends.unshift(`Herri`);
console.log(friends);
// ['Herri', 'aziz', 'risaldi', 'farhan', 'Rian']
```

## Remove Element

### Pop

for mutating array. Removing property to the last of array

```js
// Pop
friends.pop(); // remove Last Element
console.log(friends);
// ['Herri', 'aziz', 'risaldi', 'farhan']
```

### Shift

for mutating array. Removing property to the first of array

```js
// Unshift
friends.shift(); // Remove First Elemenet
console.log(friends);
//['aziz', 'risaldi', 'farhan']
```

## Checking Element

### Indexof

for checking what index of properti in array

```js
// Checking index of element
console.log(friends.indexOf("risaldi")); // 1
```

### Includes

for checking is properti in includes in array. returning boolean value

```js
console.log(friends.includes(`aziz`)); // true
```

## Array in Practice

```js
const friends = ["aziz", "risaldi", "farhan"];

const seacrName = `aziz`;
if (friends.includes(seacrName))
  console.log(`You have friend called ${friends[friends.indexOf(seacrName)]}`);
else console.log(`you dont have name called ${seacrName}`);
```

[Next: Object](./29-object.md)
