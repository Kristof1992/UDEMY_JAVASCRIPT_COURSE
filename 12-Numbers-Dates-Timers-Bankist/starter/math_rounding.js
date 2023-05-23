'use strict';

// Mathematical operations
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // Square root
console.log(8 ** (1 / 3)); // Cubic root

console.log(Math.max(2, 5, 9, '29'));
console.log(Math.max(2, 5, 9, '29px'));

console.log(Math.min(2, 5, 9));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

console.log('Random');

// Generate random numbers in a range
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 10; i++) {
  console.log(randomInt(5, 10));
}
console.log('Rounding');
// Rounding integers
console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9));
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

console.log('Rounding Decimals');
// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));
