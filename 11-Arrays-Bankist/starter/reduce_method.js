'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur, i, arr) => {
  return acc + cur;
});
console.log(balance);

const max = movements.reduce((acc, cur) => {
  return (acc = cur > acc ? cur : acc);
}, movements[0]);
console.log(max);
