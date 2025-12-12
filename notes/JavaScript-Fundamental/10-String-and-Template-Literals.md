## String and Template Literals

[Next: Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#multi-line_strings)

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

```js
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2025;

// Template Literals
const jonas = `I'm ${firstName} a ${year - birthYear} years old ${job}`; // I'm jonas a 34 years old teacher

console.log(jonas);
```

[Next: Taking Decisions: if / else Statements](./11-Taking-Decisions-if-else-Statements.md)
