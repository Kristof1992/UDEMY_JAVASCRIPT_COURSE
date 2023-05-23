'use strict';

console.log(23 === 23.0);

// Base 10 = 0-9
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(Number('23'));

// Converting String to Number
console.log(+'23');

console.log('Parsing');
// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23'));

console.log(Number.parseInt(' 2.5rem  '));
console.log(Number.parseFloat(' 2.5rem  ')); // Go to function to read number from a string

console.log('isNaN');
console.log(Number.isNaN(20));
console.log(Number.isNaN(0));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0)); // results in infinity

// !!! Best way to check for Numbers !!!
console.log('isFinite');
console.log(Number.isFinite(20));
console.log(Number.isFinite(0));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log('isInteger');
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
