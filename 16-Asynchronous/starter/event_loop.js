'use strict';

console.log('Test start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 4
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // 3

// for (let i = 1; i <= 150000; i++) {
//   Promise.resolve(`Resolved promise ${i}`).then(res => console.log(res));
// }
Promise.resolve(`Resolved promise 2`).then(res => {
  for (let i = 1; i <= 3000000000; i++) {}
  console.log(res);
});

console.log('Test end'); // 2
