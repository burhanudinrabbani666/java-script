## Asynchronus JavaScrpit AJAX and API

[Geek: Synchronus and Asynchronus](https://www.geeksforgeeks.org/javascript/synchronous-and-asynchronous-in-javascript/)

#### First ❗ What is Synchronous JavaScript?

In synchronous programming, operations are performed one after the other, in sequence. So, basically each line of code waits for the previous one to finish before proceeding to the next. This means that the program executes in a predictable, linear order, with each task being completed before the next one starts.

```js
console.log("Hi");
console.log("Geek");
console.log("How are you?");

// Hi           |
// Geek         |
// How Are You  ⬇️
```

In the above code snippet, the first line of the code Hi will be logged first then the second line Geek will be logged and then after its completion, the third line will be logged How are you. So as we can see the codes work in a sequence. Every line of code waits for its previous one to get executed first and then it gets executed.

In synchronous code, every statement waits for the previous one to finish before it runs. This is straightforward and easy to follow, but it has some drawbacks, especially when dealing with time-consuming tasks like fetching data from a server or reading a large file. If such a task is included in the sequence, it will block the execution of the rest of the code until it’s finished, leading to potential delays and a bad user experience.

## Asynchronus JavaScript

Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. This non-blocking nature helps improve performance and responsiveness, especially in web applications.

Example: In this example, we have shown the Asynchronous nature of JavaScript.

```js
console.log("Hi");

setTimeout(() => {
  // exm Async
  console.log("Geek");
}, 2000);

console.log("End");
```

How Asynchronous JavaScript Works Behind the Scenes

To understand asynchronous behavior better, it’s important to know about the JavaScript runtime environment, specifically the event loop and call stack:

- Call Stack: The call stack is where functions are executed in the order they’re called. In synchronous operations, each function is added to the stack and executed before moving to the next.
- Web APIs (in Browsers): Functions like setTimeout, HTTP requests, and event listeners are handled by Web APIs in the browser. When an asynchronous function like setTimeout is called, it is passed to these Web APIs, which manage the timing without blocking the main call stack.
- Callback Queue: Once the Web API has finished its job (like waiting for the timeout), it pushes the callback function (like the one in setTimeout) to the callback queue.
- Event Loop: The event loop continuously checks the call stack. If it’s empty, it pushes the functions from the callback queue onto the stack for execution. This is why the delayed message "Geek" is logged after other code has finished.

## AJAX Javascript

Asynchronous JavaScript and XML (Ajax, or AJAX) is a web development technique in which a web app fetches content from the server by making asynchronous HTTP requests, and uses the new content to update the relevant parts of the page without requiring a full page load. This can make the page more responsive, because only the parts that need to be updated are requested.

Ajax can be used to create single-page apps, in which the entire web app consists of a single document, which uses Ajax to update its content as needed.

Initially Ajax was implemented using the XMLHttpRequest interface, but the fetch() API is more suitable for modern web applications: it is more powerful, more flexible, and integrates better with fundamental web app technologies such as service workers. Modern web frameworks also provide abstractions for Ajax.

This technique is so common in modern web development that the specific term "Ajax" is rarely used.

## API

- Aplication Programming Interface: Piece of Software that can be used by another piece of software, inotrder to allow **application to talk each other.**
- There ara be many type of API's in Web Development; Exm: DOM API, Geolocation API, Own Class API etc. Or "Online API"/ "API"
- "Online" API: Aplication running on a server, that recevies request for data, and sends data back as response.
- We can build our own web APIs (required back-end development, e.g. with noed.js) or use 3rd-party APIs

[Next: First AJAX call: XMLHTTPREQUEST ](./ajax-call.md)
