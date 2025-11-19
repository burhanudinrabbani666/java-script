## CHALLENGE #1

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
