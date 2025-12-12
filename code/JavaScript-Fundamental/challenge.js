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

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins === scoreKoalas) console.log("Both Win the Trophy");
if (scoreDolphins > scoreKoalas) console.log("Dolphins win the Trophy");
if (scoreKoalas > scoreDolphins) console.log("Koalas win the Trophy");
