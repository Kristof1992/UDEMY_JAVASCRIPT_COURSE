/*
    *** Strict Mode ***
*/

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }

// const interface = 'Audio';


/*
    *** Functions ***
*/

// function logger() {
//     console.log('Hello World!');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// let appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

/*
    *** Functions Declarations, Expressions and Anonymous Functions***
*/

// let birthYear = 1992;

// // Function declaration
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

// // Function expression
// let calcAge2 = function calcAge2(birthYear) {
//     return 2023 - birthYear;
// }

// console.log(calcAge1(1992));
// console.log(calcAge2(1992));

/*
    *** Arrow Functions***
*/

// const calcAge3 = birthYear => 2023 - birthYear;

// // console.log(myFun(1992));

// const yearUntilRetirement = birthYear => 65 - calcAge3(birthYear);

// console.log(yearUntilRetirement(1992))

// /*
//     *** Functions calling other functions***
// */

// function cutFruitToPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitToPieces(apples);
//     const orangePieces = cutFruitToPieces(oranges);
//     return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
// }

// console.log(fruitProcessor(5, 10));

/*
    *** Coding Challenge 1#
*/

// const calcAvg = (a, b, c) => (a + b + c) / 3;

// // A team only wins if it has double the avg score of the other team
// const checkWinner = function (avgDolphins, avgKoalas) {
//     let winner = ``;
//     if (avgDolphins >= avgKoalas * 2) {
//         winner = `Dolphins won ${avgDolphins} vs ${avgKoalas} `;
//     } else if (avgKoalas > avgDolphins * 2) {
//         winner = `Koalas won ${avgKoalas} vs ${avgDolphins}`;
//     } else {
//         winner = `No winner this time`;
//     }
//     console.log(winner);
// }

// checkWinner(calcAvg(44, 23, 71), calcAvg(85, 54, 41));
// checkWinner(calcAvg(65, 54, 49), calcAvg(23, 34, 27));

/*
    *** Arrays ***
*/

// Mixed types allowed in JS 'arrays'
// const friends = ['Michael', 'John', 1, new Array(1, 2, 3)]; // Disguisting

// const years = new Array(1, 2, 3);

// friends.forEach(element => { console.log(element); });

/*
    *** Basic Array Operations ***
*/

// const friends = ['Michael', 'John', 1, new Array(1, 2, 3)]; // Disguisting

// let len = friends.push('Last'); // Adds to endreturns length of the array

// friends.unshift('First'); // Adds to start
// friends.pop(); // Removes last

// friends.forEach(element => { console.log(element); });

// console.log(friends.indexOf('Michael'));

// console.log(friends.includes(1)); // true

// if (friends.includes('John')) {
//     console.log('John exists');
// }

/*
    *** Coding Challenge 2# ***
*/

// const calcTip = (a) => {
//     return a >= 50 && a <= 300 ? a * 0.15 : a * 0.20;
// }

// const bills = [44, 23, 71];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips);

/*
    *** Objects ***
*/

// const array = [
//     'Fred',
//     'Salinsky',
//     32,
//     'producer',
//     ['a', 'b', 'c']
// ];

// // Object literal
// const fred = {
//     firstName: 'Fred',
//     lastName: 'Salinsky',
//     age: 32,
//     position: 'producer',
//     friends: ['a', 'b', 'c']
// };

/*
    *** Dot vs Bracker notation ***
*/

// const fred = {
//     firstName: 'Fred',
//     lastName: 'Salinsky',
//     age: 32,
//     job: 'producer',
//     friends: ['Michael', 'b', 'c']
// };

// console.log(fred);

// console.log(fred.lastName);
// console.log(fred['lastName']);

// const nameKey = 'Name';
// console.log(fred['first' + nameKey])

// const response = prompt('What do you want to know about Fred? Choose between: firstName, lastName, age, job, and friends');

// if (fred[response]) {
//     console.log(fred[response]);
// } else {
//     console.log('Wrong request! Choose between: firstName, lastName, age, job, and friends')
// }

// fred.location = 'Kentucky';
// fred['twitter'] = '@fredsalinsky';
// console.log(fred);

// Challenge

// let sentence = `${fred.firstName} has ${fred.friends.length} friends, and his best friend is called ${fred.friends[0]}`

// console.log(sentence);

/*
    *** Object Methods ***
*/

// const fred = {
//     firstName: 'Fred',
//     lastName: 'Salinsky',
//     birthYear: 1992,
//     job: 'producer',
//     friends: ['Michael', 'b', 'c'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         console.log(this);
//         return 2023 - this.birthYear;
//     },

//     getAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },

//     toString: function () {
//         return `${this.firstName} is a ${this.getAge()}years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// // console.log(fred.calcAge());
// console.log(fred.toString());

/*
    *** Coding Challenge 3# ***
*/

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// console.log(`${mark.firstName}'s BMI (${mark.calcBmi()}) is ${mark.bmi > john.calcBmi() ? 'higher' : 'lower'} than ${john.firstName}'s BMI:${john.bmi}`);


/*
    *** For loop ***
*/

// for (let i = 0; i < 10; i++) {
//     console.log(`Lifting weights repetition ${i + 1}`);
// }

/*
    *** Looping Arrays ***
*/

// const A = ['John', 'Carmack', 31, 'teacher', ['a', 'b', 'c']];

// const types = [];

// for (let i = 0; i < A.length; i++) {
//     types[i] = A[i];
// }

// console.log(A);
// console.log(types);

// for (let i = A.length - 1; i > -1; i--) {
//     console.log(A[i]);
// }


// const A = ['John', 'Carmack', 31, 'teacher', ['a', 'b', 'c']];

// let i = A.length - 1;
// while (i > -1) {
//     console.log(A[i]);
//     i--;
// }

// let diceNum = 0;
// let attemptsToFind = 0;

// while (diceNum !== 6) {
//     attemptsToFind++;
//     diceNum = Math.trunc(Math.random() * 6 + 1);
// }
// console.log(diceNum, attemptsToFind);

/*
    *** Coding Challenge 4# ***
*/

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// const calcTip = (tip) => {
//     return tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.20;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     totals[i] = tips[i] + bills[i];
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// // BONUS
// let calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// // BONUS 2
// let calcAverageImproved = function (arr) {
//     let sum = 0;
//     let counter = 0;
//     if (arr.length == 0) {
//         console.log(`The array is empty!`);
//         return 0; // returns 0 immediately if the array is empty
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') continue;
//         sum += arr[i];
//         counter++; // increments counter only if its a number

//     }
//     if (counter === 0) {
//         console.log(`The array doesn't contain any numbers!`);
//         return 0;
//     }
//     return sum / counter; // divides the sum with number of found elements
// }

// console.log(calcAverage(totals));

// console.log(calcAverageImproved([50, 50, 'ads']));


