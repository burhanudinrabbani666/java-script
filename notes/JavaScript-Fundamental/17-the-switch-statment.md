## The Switch Statement

[MDN: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

A switch statement first evaluates its expression. It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression (using the strict equality comparison) and transfers control to that clause, executing all statements following that clause.

### Breaking and fall-through

You can use the break statement within a switch statement's body to break out early, often when all statements between two case clauses have been executed. Execution will continue at the first statement following switch.

If break is omitted, execution will proceed to the next case clause, even to the default clause, regardless of whether the value of that clause's expression matches. This behavior is called "fall-through".

```js
const day = "monday";

switch (day) {
  // day === "monday"
  case "monday":
    console.log("Plan Courses structure");
    console.log("Go to coding meetup");
    break; // To stop the code

  case "tuesday":
    console.log("Perpare My video");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("record Videos");
    break;

  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;

  default:
    console.log("Not A valid day");
}
```

> the most usefull case switch statement is for equality

[Next: Statment and Expressions](./18-statment-and-expressions.md)
