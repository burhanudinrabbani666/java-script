## Displaying Map Marker

[Change Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)<br>
change() is fired for <input>, <select>, and <textarea> elements when the user modifies the element's value. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.

```js
.addEventListener("change", function(){})
```

[.closest() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) & [.toggle() method](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

.closest() Method: The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

.toggle() Method: The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.

```js
// scrpit.js

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
```

[Next: Project Architecture](./project-architecture.md)
