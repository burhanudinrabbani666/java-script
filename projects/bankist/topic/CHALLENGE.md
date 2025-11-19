## CHALLENGE #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog 🐶 number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets

```js
// Challenge #1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDog = function (data1, data2) {
  // 1.
  const dogsJuliaCorrected = data1.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // 2.
  const bothData = dogsJuliaCorrected.concat(data2);

  // 3.
  function printCheckDog(data) {
    data.forEach((age, index) => {
      const numberDogs = index + 1;
      const checkAge =
        age >= 3 ? `an adult and ${numberDogs} years old` : `still a puppy 🐶`;
      console.log(`Dog Number ${numberDogs} is ${checkAge}`);
    });
  }

  // Result
  printCheckDog(data1);
  console.log(`------Separator-----`);
  printCheckDog(data2);
  console.log(`------Separator-----`);
  console.log(`BOTH DATA AND CORRECTED`);
  printCheckDog(bothData);
};

checkDog(dogsJulia, dogsKate);
```

## CHALLENGE #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 \_ dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge \* 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

```js
const calAvarageHumanAge = (dogAgeData) => {
  // calc in human age
  const inHumanAge = dogAgeData.map((dogAge) => {
    if (dogAge <= 2) return 2 * dogAge;
    else if (dogAge > 2) return 16 + dogAge * 4;
  });
  console.log(inHumanAge);

  // filter under 18 age
  const filterUnder18 = inHumanAge.filter((dogAge) => {
    return dogAge > 18;
  });
  console.log(filterUnder18);

  // calc avg
  const avgAge =
    filterUnder18.reduce((acc, curr) => acc + curr, 0) / filterUnder18.length;

  //
  console.log(Math.trunc(avgAge));
};

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

calAvarageHumanAge(data1);
console.log(`======= Separator =======`);
calAvarageHumanAge(data2);
```
