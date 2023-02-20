// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function calcTempAmplitude(min, max) {
//   for (let i = 1; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== 'number') continue;
//     if (temperatures[i] < min) min = temperatures[i];
//     if (temperatures[i] > max) max = temperatures[i];
//   }
//   console.log(
//     `Difference between max ${max} and min ${min} is ${Math.abs(max - min)}`
//   );
//   return max - min;
// }

// const x = calcTempAmplitude(temperatures[0], temperatures[0]);
// console.log(x);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degree celsius:')),
//     value: 10,
//   };
//   //   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// function calcTempAmplitudeBug(min, max) {
//   for (let i = 1; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== 'number') continue;
//     if (temperatures[i] < min) min = temperatures[i];
//     if (temperatures[i] > max) max = temperatures[i];
//   }
//   console.log(
//     `Difference between max ${max} and min ${min} is ${Math.abs(max - min)}`
//   );
//   return max - min;
// }

// const x = calcTempAmplitudeBug(temperatures[0], temperatures[0]);
// console.log(x);

// const temperatures = [17, 21, 23];

// function forecastedTemp(arr) {
//   let start = '... ';
//   for (let i = 0; i < arr.length; i++) {
//     start += `${arr[i]}°C in ${i + 1} ${i < 1 ? 'day' : 'days'} ... `;
//   }
//   return start;
// }

// console.log(forecastedTemp(temperatures));
