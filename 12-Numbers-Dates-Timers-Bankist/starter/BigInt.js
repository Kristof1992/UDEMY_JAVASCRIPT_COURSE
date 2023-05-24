'use strict';

console.log(2 ** 53 - 1);
console.log(2 ** 53);
console.log(2 ** 53 + 1);

console.log(423423542534563463463456345n);
console.log(BigInt(4234235425));

// Operations
console.log(10000n + 10000n);
console.log(325235434654364565345456n * 10000000n);

const huge = 203453456345645353456456456n;
const num = 23;

console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is Really big!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
