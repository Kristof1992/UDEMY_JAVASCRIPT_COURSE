'use strict';

// prettier-ignore
// const lotteryPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//         if (Math.random() >= 0.5) {
//           resolve('You WIN 🎉');
//         } else {
//           reject(new Error('You lost your money 💥'));
//         }
//       }, 1000
//   );
// });

// lotteryPromise
//   .then(state => {
//     console.log(state);
//   })
//   .catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('5 seconds passed');
  });

Promise.resolve('OK').then(resolve => console.log(resolve));
Promise.reject(new Error('Something went wrong')).catch(err =>
  console.error(err)
);

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//         setTimeout(() => {
//           console.log('5 seconds passed');
//         }, 1000); // last call
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
