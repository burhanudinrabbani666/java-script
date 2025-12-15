## Use Strict mode

JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

```js
"use strict";

let hasDriversLicense = false;
const passTest = true;

// if we are not use strict mode this bug is not detected
// and code its just running but nothing nformation about that
if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log(`I can Drive`);

// const interface = "Audio";
// const private = 534;
// const if =23
```

[Next: Function](./22-function.md)
