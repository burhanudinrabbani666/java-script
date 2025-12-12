## Boolean Logic

[Logical operator](https://javascript.info/logical-operators)

### AND Operator &&

The AND operator is represented with two ampersands &&:

```js
result = a && b;
```

In classical programming, AND returns true if both operands are truthy and false otherwise:

| AND   | True  | False |
| ----- | ----- | ----- |
| True  | True  | False |
| False | False | False |

### OR operator ||

The “OR” operator is represented with two vertical line symbols:

```js
result = a || b;
```

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

| OR    | True | False |
| ----- | ---- | ----- |
| True  | True | True  |
| False | True | False |

### NOT !

The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

```js
result = !value;
```

The operator accepts a single argument and does the following:

- Converts the operand to boolean type: true/false.
- Returns the inverse value.

For instance:

```js
alert(!true); // false
alert(!0); // true
```

[Next: Logical Operator](./16-logical-operator.md)
