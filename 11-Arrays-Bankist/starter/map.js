'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const mapped = movements.map((e) => (e * 1.1).toFixed(2));
console.log(mapped);

const movementsUSDfor = [];
for (const move of movements) {
  movementsUSDfor.push((move * 1.1).toFixed(2));
}

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
