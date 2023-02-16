// VARIABLES
// const nameMark = 'Mark';
// const nameJohn = 'John';

// let massMark = 0;
// let heightMark = 0;
// let bmiMark = 0;

// let massJohn = 0;
// let heightJohn = 0;
// let bmiJohn = 0;

// let higherBMI = 0;


// TEST DATA 1
// massMark = 78;
// heightMark = 1.69;

// Exponentiation precedes Division therefore the result is correct.
// bmiMark = massMark / heightMark ** 2;

// massJohn = 92;
// heightJohn = 1.95;
// bmiJohn = massJohn / heightJohn ** 2;

// higherBMI = bmiMark > bmiJohn ? 'Mark' : 'John';

// PRINT TEST DATA 1
// console.log(
//     'Name:' + ' ' + nameMark + '\n' +
//     'Mass:' + ' ' + massMark + 'kg' + '\n' +
//     'Height:' + ' ' + heightMark + 'm' + '\n' +
//     'BMI Mark:' + ' ' + bmiMark + '\n' + '\n' +
//     'Name:' + ' ' + nameJohn + '\n' +
//     'Mass:' + ' ' + massJohn + 'kg' + '\n' +
//     'Height:' + ' ' + heightJohn + 'm' + '\n' +
//     'BMI John:' + ' ' + bmiJohn + '\n' + '\n' +
//     'Higher BMI:' + ' ' + higherBMI
// );

// RESET DATA
// massMark = 0; heightMark = 0; bmiMark = 0; massJohn = 0; heightJohn = 0; bmiJohn = 0; higherBMI = 0;

// TEST DATA 2
// massMark = 95;
// heightMark = 1.88;
// bmiMark = massMark / heightMark ** 2;

// massJohn = 85;
// heightJohn = 1.88;
// bmiJohn = massJohn / heightJohn ** 2;

// higherBMI = bmiMark > bmiJohn ? 'Mark' : 'John';

// PRINT TEST DATA 2
// console.log(
//     'Name:' + ' ' + nameMark + '\n' +
//     'Mass:' + ' ' + massMark + 'kg' + '\n' +
//     'Height:' + ' ' + heightMark + 'm' + '\n' +
//     'BMI Mark:' + bmiMark + '\n' + '\n' +
//     'Name:' + ' ' + nameJohn + '\n' +
//     'Mass:' + ' ' + massJohn + 'kg' + '\n' +
//     'Height:' + ' ' + heightJohn + 'm' + '\n' +
//     'BMI John:' + ' ' + bmiJohn + '\n' + '\n' +
//     'Higher BMI:' + ' ' + higherBMI
// );


// STRINGS AND TEMPLATE LITERALS

// const firstName = 'John';
// const job = 'teacher';
// const birthYear = '1992';

// const message = "I'm " + firstName + ' a ' + (2023 - birthYear) + ' years old ' + job + '!';

// console.log(message);

/*
    *** Template Strings ***
*/
// const person = `I'm ${firstName} a ${2023 - birthYear} years old ${job}!`;
// console.log(person);

// console.log(`Multi
// line
// String`);


// const age = 10;

// if (age >= 18) {
//     console.log("Pass");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century = 21;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(`You were born in the ${century}th century`);

// let valueMark = 78 / 1.69 ** 2;
// let valueJohn = 92 / 1.95 ** 2;

// let higherName = '';

// if (valueMark > valueJohn) {
//     higherName = 'Mark';
// } else {
//     higherName = 'John';
// }

// console.log(`${higherName}' BMI was higher`);

/*
    *** Type Conversion and Coercion ***
*/

// Type Conversion - Manually converting types
// const inputYear = '1991';
// console.log(typeof Number(inputYear));
// console.log(inputYear + 18);

// console.log(String(23));

// Type coercion
// console.log('I am ' + 23 + ' years old'); // Number to String
// console.log('23' - '10' - 3); // String to Number
// console.log('23' * '2'); // String to Number
// console.log('23' / '2'); // String to Number

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

/*
    *** Truthy and falsy values ***
*/

// The 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false

// // Truthy value
// console.log(Boolean({})); // {} is an Object in JS -> evaluates to true

// // A declared variable without a defined value is 0 that is undefined.
// // Regardless of implicit or explicit definition.
// let height; // or height = 0; Is still falsy.

// if (height) { // false
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// let heightTwo = 0; // false

// if (heightTwo) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

/*
    *** Equality operators == and === ***
    == - Loose equality operator; does type coercion
    === - Strict equality operator; doesn't do type coercion
*/

// const age = 18;
// if (age === 18) console.log('Pass'); // true

// const ageTwo = 25;
// if (ageTwo == '25') console.log('Pass'); //true

// let input = prompt("What is your favourite number");

// console.log(typeof input);

/*
    *** Logical operators ***
*/

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// console.log
//     (`AND
// True AND True = ${true && true}
// True AND False = ${true && false}
// False AND True = ${false && true}
// False AND False = ${false && false}
// OR
// True OR True = ${true || true}
// True OR False = ${true || false}
// False OR True = ${false || true}
// False OR False = ${true || false}
// NOT
// !True = ${!true}
// !False = ${!false}`);

// // Precedence (AND > OR)
// console.log(`True OR False AND False = ${true || (false && false)}`); // 1 or 0 and 0

/*
    *** Coding Challenge #3***
*/

// TEAM A
// let scoreOneA = 96;
// let scoreTwoA = 108;
// let scoreThreeA = 89;

// let minScoreA = false;

// // Min score
// if (scoreOneA >= 100 || scoreTwoA >= 100 || scoreThreeA >= 100) {
//     minScoreA = true;
// }

// // Avg score
// let avgScoreA = (scoreOneA + scoreTwoA + scoreThreeA) / 3;

// // TEAM B
// let scoreOneB = 88;
// let scoreTwoB = 91;
// let scoreThreeB = 110;

// let minScoreB = false;

// if (scoreOneB >= 100 || scoreTwoB >= 100 || scoreThreeB >= 100) {
//     minScoreB = true;
// }

// // Avg score
// let avgScoreB = (scoreOneB + scoreTwoB + scoreThreeB) / 3;

// let winner;

// if (avgScoreA > avgScoreB && minScoreA) {
//     winner = 'TEAM A WON';
// } else if (avgScoreA < avgScoreB && minScoreB) {
//     winner = 'TEAM B WON';
// } else if (avgScoreA === avgScoreB && (minScoreA && minScoreB)) {
//     winner = 'IT IS A DRAW!';
// } else {
//     winner = 'UNFORTUNATELY NO ONE HAS WON THE COMPETITION!';
// }


// let printScore = `The result of the competition is: ${winner}`;
// let printDetailsA =
//     `Team A
// Score 1: ${scoreOneA}
// Score 2: ${scoreTwoA}
// Score 3: ${scoreThreeA}
// Min score: ${minScoreA}
// Avg score: ${avgScoreA}
// `

// let printDetailsB =
//     `Team B
// Score 1: ${scoreOneB}
// Score 2: ${scoreOneB}
// Score 3: ${scoreThreeB}
// Min score: ${minScoreB}
// Avg score: ${avgScoreB}
// `

// console.log(printDetailsA);
// console.log(printDetailsB);

// console.log(printScore);

/*
    *** THE SWITCH STATEMENT ***
*/

// const day = prompt("Enter a day of the week: ");

// switch (day) {
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     case 'wednesday':
//         console.log('wednesday');
//         break;
//     case 'thursday':
//     case 'friday':
//     case 'saturday':
//         console.log('thursday, friday, saturday');
//         break;
//     case 'sunday':
//         console.log('sunday');
//         break;
//     default:
//         console.log('Not a valid day');
// }

/*
    *** Statements and Expressions in programming  ***
*/

// STATEMENT
// const a = 5;

// EXPRESSION
// 5 + 5

/*
    *** Ternary Operator  ***
*/

// let a = 5 > 10 ? true : false;

// console.log(a);

/*
    *** Coding challenge #4  ***
*/

// let bill = 275;
// console.log(`The bill is: ${bill} The value is: ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20} Bill + Tip: ${bill + (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20)}`);

// bill = 40;
// console.log(`The bill is: ${bill} The value is: ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20} Bill + Tip: ${bill + (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20)}`);

// bill = 430;
// console.log(`The bill is: ${bill} The value is: ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20} Bill + Tip: ${bill + (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20)}`);