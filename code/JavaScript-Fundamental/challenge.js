// For Challenge in JavaScript Fundamental topic
const markWeight = 78;
const markHeight = 1.69;
const jhonWeight = 92;
const jhonHeight = 1.95;

const markBMI = markWeight / (markHeight * markHeight);
const jhonBMI = jhonWeight / (jhonHeight * jhonHeight);

const markHigherBMI = markBMI > jhonBMI;

// if (markHigherBMI)
// console.log(`Mark's BMI (${markBMI} is higher than John's BMI (${jhonBMI}))`);
// else
// console.log(`John's BMI (${jhonBMI} is higher than Mark BMI (${markBMI}))`);

const scoreDolphins = (109 + 95 + 123) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

// console.log(`score Dolphins: ${scoreDolphins} \nscore Koalas: ${scoreKoalas}`);
// if (scoreDolphins === scoreKoalas) console.log("Both Win the Trophy");
// if (scoreDolphins > scoreKoalas) console.log("Dolphins win the Trophy");
// if (scoreKoalas > scoreDolphins) console.log("Koalas win the Trophy");

// if (scoreDolphins === scoreKoalas && scoreDolphins > 100 && scoreKoalas > 100)
//   console.log("Both Win the Trophy");

// if (scoreDolphins > scoreKoalas && scoreDolphins > 100)
//   console.log("Dolphins win the Trophy");

// if (scoreKoalas > scoreDolphins && scoreKoalas > 100)
//   console.log("Koalas win the Trophy");

// Challenge #4
const bill = 40;

const tip =
  bill >= 50 && bill <= 300
    ? bill * (15 / 100) //
    : bill * (20 / 100);

// console.log(
//   `The Bill was ${bill}, the tip was ${tip}, and total value ${bill + tip}`
// );

const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;

function checkWinner(averageDolphins, averageKoalas) {
  const dolphinsWinner = averageDolphins >= 2 * averageKoalas;

  const koalasWinner = averageKoalas >= 2 * averageDolphins;

  if (dolphinsWinner) {
    return `dolphin's win 🏆 (${averageDolphins} vs ${averageKoalas})`;
  }

  if (koalasWinner) {
    return `koala's win 🏆 (${averageKoalas} vs ${averageDolphins})`;
  }

  if (!dolphinsWinner && !koalasWinner) {
    return `No Winner`;
  }
}
// Data 1
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(100, 100, 100);
// console.log(checkWinner(averageDolphins, averageKoalas));

// Data 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(averageDolphins, averageKoalas));
