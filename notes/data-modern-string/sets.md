## Sets

sets is collection of unique values. sets can never **have** any duplicate.

```js
const orderSet = new Set([
  `pasta`,
  `pizza`,
  `pizza`,
  `rissoto`,
  `pasta`,
  `rissoto`,
]);

console.log(orderSet); // [ "pasta", "pizza", "rissoto" ]
```

for checking set use **size**, not length like normal array. and have another methode

```js
console.log(orderSet.size); // 3

// has
console.log(orderSet.has(`pizza`)); // true
console.log(orderSet.has(`Bakwan`)); // false

// add new element
orderSet.add(`garlic bread`); // the value still unique or just one in order set
orderSet.add(`garlic bread`);

// delete
orderSet.delete(`garlic bread`);
```

> in set dont have any index. use .has for return properti form set

### New Operation to make SETS useful!

#### intersection method

This is a recently added method to the SetObject in JavaScript, designed specifically for finding the common elements between two sets.

```js
// intersection method

const commonFood = italianFoods.intersection(mexicanFoods);
console.log([...commonFood], `this is intersection method, in Array`); // Set [ "tomatoes", "garlic" ]
```

![intersection-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection/diagram.svg)

#### union method

the union()Method is a relatively new addition to the Setobject, designed to combine two sets into a new set containing all **unique** elements from both

```js
// union method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion, ` This union method`);
```

![union-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union/diagram.svg)

### difference method

The difference() method of Set instances takes a set and returns a new set containing elements in this set but not in the given set.

```js
// difference method
const uniqueItailianFood = italianFoods.difference(mexicanFoods);
console.log(uniqueItailianFood, `this is difference method`); // Set(4) [ "pasta", "gnocchi", "olive oil", "basil" ]
```

![differnece-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference/diagram.svg)

#### symmetricDifference method

The symmetricDifference() method of Set instances takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.

```js
const uniqueItalianAndMExicanFood =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMExicanFood);
```

![symmetricDifference-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference/diagram.svg)
