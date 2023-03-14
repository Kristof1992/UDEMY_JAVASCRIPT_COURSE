'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'David',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(me.age);
// console.log(friend.age);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica);
// console.log('After marriage: ', marriedJessica);

// marriedJessica = {};

// Copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);


console.log('////');

const jack = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 60,
    family: ['Alice', 'Bob']
};

const jackCopy = Object.assign({}, jack);
jackCopy.firstName = 'Dave';
jackCopy.lastName = 'Brown';
jackCopy.age = 10;

jack.family.push('Ronald');
jackCopy.family.push('Roger');

console.log(jack);
console.log(jackCopy);