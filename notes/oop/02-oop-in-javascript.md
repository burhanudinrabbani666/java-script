## OOP in JavaScript

Clasic OOP Classes

    🟨 Class --Instantion--> Instance

Object (instance) are **instantied** from a class, which functions lie a blue print.

    🟨 Prototype (Contains Methods) <---PROTOTYPE INHERITANCE/DELEGATION--- Object (Can Access Methods)

- Object are linked to prototype object.
- Prototypal inheritance: the prototype contains methods (behavior) that are **acessible to all object linked to that prtotype**.
- Behavior is designed to the linked prototype object.

```js
const num = [1, 2, 3];
num.map((n) => n * 2); // array delegating map prototype
```

### 3 Ways of Implementing Prototypal Inheritance in JavaScript

how to we actually ccreate protoypes? and how do we link objects to prototypes? how can we create new object, without having classes?

##### 1️⃣ Constructor functions

- Tehcnique to create objects from a functions
- This is how built in object like Arrays, Maps od Sets are actually implemented.

##### 2️⃣ ES6 Classes

- Modern alternative to constructor function syntax.
- "Syntatic Sugar": behind the scenes, ES6 classes work exactly like constructor functions.
- ES6 classes NOT behave like classes in "classical OOP".

##### 3️⃣ Object.create()

- The easiest and most straighforwad way of linking an object to a prototype object.
