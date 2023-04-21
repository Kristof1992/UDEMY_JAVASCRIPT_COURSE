const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline[0]);
console.log('B737'[0]);
console.log('B737'.length);

console.log(airline.indexOf('r'));

// console.log(airline.lastIndexOf());

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log('\n');

console.log(typeof new String()); // Object
console.log(typeof new String('A').slice(0)); // String

let str1 = 'Al p ha';
let str2 = 'More complicated string';
let subStr1 = str1.slice(0, 2);
let subStr2 = str1.slice(3, 4);
let subStr3 = str2.slice(10, 13); // Get ica from complicated
let subStr4 = str2.slice(-6, str2.length); // Get last 3 chars
let subStr5 = str2.slice(17, str2.length); // Get last 3 chars

console.log(subStr1);
console.log(subStr2);
console.log(subStr3);
console.log(subStr4);
console.log(subStr5);
console.log(str2.length);

console.log('\n');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'rObErT';
const fixed = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();

console.log(fixed);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// Replaces all occurences
// console.log(announcement.replaceAll('door', 'gate'));

// Replaces all occurences with Regex
const regex = announcement.replace(/door/g, 'gate');

console.log(announcement);

// Booleans
const planeName = 'A320neo';
console.log(planeName.includes('A320'));
console.log(planeName.includes('Boeing'));

console.log(planeName.startsWith('A'));

console.log('\n');

// SPLIT and JOIN
console.log('a+very+nice+string'.split('+'));

console.log('Arnold Swartzenegger'.split(' '));

const [firstName, lastName] = 'Arnold Swartzenegger'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const passengerX = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesArr = [];
  for (const n of names) {
    namesArr.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesArr.join(' '));
};

const capitalizeDifferent = function (name) {
  const names = name.split(' ');
  const namesArr = [];
  for (const n of names) {
    namesArr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesArr.join(' '));
};

capitalizeName(passengerX);
capitalizeName('John Wick');

capitalizeDifferent(passengerX);

console.log('\n');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jake'.padStart(20, '+').padEnd(20, '+')); // (a, b) where string.length > suffix is the number of chars we want to fill the string prefix.

// Credit Card Masking 1
const maskCreditCardRegex = function (number) {
  const str = number + '';
  const prefix = str.slice(0, str.length - 4).replace(/\d/g, '*');
  const suffix = str.slice(str.length - 4);

  return prefix + suffix;
};

console.log(maskCreditCardRegex('1234 1234 4564 8981')); // 19 chars overall (15 chars + 4 chars at the end)
maskCreditCardRegex(1234123445648981); // 16 chars (excluding spaces)

// Credit Card Masking 2
const maskCreditCardPadding = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*'); // length -4 chars added to the left of str
};

console.log(maskCreditCardPadding('1234 1234 4564 8981'));
console.log(maskCreditCardPadding(6463783667));
console.log(maskCreditCardPadding(772215));

// Repeat
const message2 = 'Bad weather... All Departures delayed...\n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
