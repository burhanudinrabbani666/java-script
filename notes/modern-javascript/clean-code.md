## Modern and Clean Code

### Readable Code

- Write code so that **others** can understand it.
- Write code so that **you** can understand it in 1 year.
- Avoit too "clever" and overcomplicated solutions.
- Use descriptive variable names: **What they contains**.
- Use descriptive function names: **What they do**.

### General

- Use DRY principle (refactor you code).
- Don't pollute global namespace, encapsulate instead.
- Dont use var.
- Use strong type checks (=== and !==).

### Function

- Generally, functions should do **only one thing**.
- Dont use more than three function parameters.
- Use default parameters whenever possiable.
- Generally, return same data type as received.
- Use arrow functions when they make code more readable.

### OOP

- Use es6 classes
- Encapsulate dataand dont mutate it from outside the class
- Imployment method chaining
- Do not use arrow functions as methods (in reguler object)

### Avoid Nested Code.

- Use early return (guard clauses)
- Use ternary(conditional) or logical operator instead of _if_
- Use multiaple _if_ instead _if/else if_
- Avoid for loops, use array methods instead
- Avoid callback-based asynchronus APIs

### Asynchronus Code

- Consume promises with async/await for the best readability
- Whenever possiable, run promises in parallel (Promise.all)
- Handle errors and promise rejections
