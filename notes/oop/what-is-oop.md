## What is Object-Oriented Progaramming?

- Object-Oriented Progaramming (OOP) is a programming **paradigm** based on the concept of objects;
  > paradigm is style of code, "how" we write and organize code
- We use objects to model (describe) real-world like **real world**: User or todo list item or **abstract fetaures**: HTML component or data structure;
- Object may contain data (properties) and code (methods). By using object, we pack **data and the corresponding behavior** into one block;

```js
const user = {
  // Data
  user: "jonas",
  password: "dk23s",
  // Behavior
  login(password) {
    // Login logic
  },
  sendMessages(str) {
    // Sending Logic
  },
};
```

- in OOP, object are **self-contained** pieces/block of code;
- object are **building blocks** of applications, and **interact** with one annotehr;
- interactions happen through a **public innterface** (API): methods that the code **outside** of the object can access and use to communicate with object.
- OOP was developed with goal of organizing code, to make it more flexiable and easier to maintain (avoid "spaghetti code")

## Classes and Instances (Traditional OOP)

- Class:
  The blueprint for a house. It defines the number of rooms, the layout, the materials to be used, etc.
- Instance:
  An actual house built according to that blueprint. Each house is a distinct instance, even if they share the same blueprint. One house might have a red roof, another a blue roof, reflecting different values for their respective instance variables.

### Top 4 Fundamental OOP Principles

"How do we accltually design classes? How do we modl real-world data into classes?"

#### 1️⃣ Abstraction

Ignoring or hiding details thta **don't matter**, allowing us to get an **overview** prespective of the _thing_ we're implemting, instead of messing with detail that don't really matter to our implementation.

#### 2️⃣ Encapsulataion

Keeping properties and methods **private** inside the class, so tey are **not accessible from outside the class**. Some methods can be **exposed** as a public interface (API).

#### 3️⃣ inheritance

Making all propertie and methods of certain class **avaible to child class**, forming a hierarchical relationship between clases. This allow us to **reuse common logic** and to model real-world relatioships.

#### 4️⃣ Ploymorphism

A child class can overwrite a method it inherited from a parent class (it's more complex that that)
