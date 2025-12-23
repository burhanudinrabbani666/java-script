## Static Method

The static keyword defines a static method or field for a class, or a static initialization block. Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

```js
Person.hey = function () {
  console.log("Hey There 😄");
  console.log(this);
};

Person.hey(); // "Hey There 😄"
nurasia.hey(); // error ❎
```
