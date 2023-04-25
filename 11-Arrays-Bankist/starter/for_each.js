'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Looping with for of
for (const movement of movements) {
  console.log(movement);
}

// Looping with for of we can get index and elements at the same time
for (const [i, movement] of movements.entries()) {
  console.log(movements[i]);
}

console.log('FOR EACH');
movements.forEach((movement, i, array) => console.log(movement, i));
console.log('MAPS and SETS');
// For Each with Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => console.log(key, value));

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

//
currenciesUnique.forEach((value, _, map) => console.log(value));
