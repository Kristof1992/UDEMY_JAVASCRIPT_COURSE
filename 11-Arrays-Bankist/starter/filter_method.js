'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((move) => move > 0);
const withdrawals = movements.filter((move) => move < 0);

console.log(deposits);
console.log(withdrawals);
