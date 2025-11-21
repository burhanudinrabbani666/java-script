## Bankist

This project is part of a course I took on Udemy. It's not my original project.

Source : [Section : Working With Array]()

## Topics

- [Simple Array Method](./topic/simple-array-method.md)
- [The New at Methods](./topic/the-new-at-method.md)
- [Looping Arrays: forEach](./topic/looping-arrays-foreach.md)
- [forEach With Maps and Sets](./topic/foreach-with-maps-and-sets.md)
- [Project : "Bankist" app]()
- [Creating DOM Elements](./topic/)
- [CHALLENGE #1](/projects/bankist/topic/CHALLENGE.md)
- [Data Transformations: map, filter, reduce](./topic/maps-filter-reduce.md)
- [The Map Method](./topic/maps-filter-reduce.md)
- [Computing Usernames]()
- [The Filter Method](./topic/maps-filter-reduce.md)
- [The Reduce Method](./topic/maps-filter-reduce.md)
- [CHALLENGE #2](./topic/CHALLENGE.md)
- [The Magic of Chaining Methods]()
- [CHALLENGE #3](./topic/CHALLENGE.md)
- [The Find Method](./topic/find.md)
- [The findIndex Method](./topic/find.md)
- [some and every](./topic/some.md)
- [flat and faltMap](./topic/flat-and-flatMap.md)
- [CHALLENGE #4](./topic/CHALLENGE.md)
- [Soritng Arrays](./topic/sort.md)
- [Summary :]()
- [Array Methods Practice]()
- [CHALLENGE #5]()

### What the best array method to use?

#### what do i actually want from this method?

| Purpose                           | Method                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **To Mutate Original**            |                                                                                                                                                                                                                                                                                                                                                        |
| Add to Original                   | [.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) <br /> [.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)                                                                                                                                 |
| Remove From Original              | [.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) <br /> [.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) <br/>[.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)                         |
| Others                            | [.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) <br/>[.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)<br/>[.fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)                          |
| **A new array based on original** |                                                                                                                                                                                                                                                                                                                                                        |
| Same length as original           | [.map (loop)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)                                                                                                                                                                                                                                              |
| filtered using condition          | [.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)                                                                                                                                                                                                                                               |
| Taking portion of original        | [.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)                                                                                                                                                                                                                                                 |
| With one item replaced            | [.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)                                                                                                                                                                                                                                                  |
| Flattened                         | [.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)<br />[.flatMap ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)                                                                                                                                  |
| New Method                        | [.toReversed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)<br />[.toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)<br />[.toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced) |
| Purpose                           | Method                                                                                                                                                                                                                                                                                                                                                 |
| Purpose                           | Method                                                                                                                                                                                                                                                                                                                                                 |

> these should usually be avoid ⚠️. modern JavScript development is movinginto a direction of using a more functional, **non-detructive approach**, where instead of mutating original data structure, we simply create new ones.

👉 Joining two Array:

- [.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

3.  an array idex

👉 Based on value:

- [.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

👉 Based on value:

- [.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [.findLastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

4.  an array element

👉 Based on test condition:

- [.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [.findLast](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

👉 Based on position:

- [.at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

5.  know if array includes

👉 Based on value:

- [.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

👉 Based on test condition:

- [.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

6.  a new string

👉 Based on separator:

- [.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

7.  Transform to value

👉 Based on Accumulator:

- [.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

8. to just loop array

👉 Based on callback:

- [.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### More Arrays Tools and Techniques

👉 Groping an array by categories:

- [Object.groupBy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)

👉 Creating a new array from scratch:

- [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

👉 Creating a new array from scratch with n empty psition( use together with .fill method):

[new Array (n)]()

👉 Joining 2 or more arrays:

[...arr1, ...arr2]

👉 Creating a new array containing **unique** values:

## Thank you 🏁
