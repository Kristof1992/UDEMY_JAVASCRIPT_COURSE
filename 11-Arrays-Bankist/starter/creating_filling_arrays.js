'user strict';

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4));

const x = new Array(7);

x.fill(1); // Mutates
console.log(x);

x.fill(9, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const diceRolls = Array.from({ length: 100 }, (_, i) =>
  Math.round(Math.random() * 6 + 1)
);
console.log(diceRolls);

// Real World Example
// const labelBalance = document.querySelector('.balance__value');

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );
//   movementsUI.map((el) => el.textContent.replace('€', ''));
// });
