'use strict';

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prorotype
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this - creates as many functions as objects
  this.calcAge = function () {
    console.log(2023 - this.birthYear);
  };
};

const p1 = new Person('Jonas', 1991);
const p2 = new Person('Jack', 1975);
//console.log(p1); // Person {firstName: 'Jonas', birthYear: 1991, calcAge: ƒ}
//console.log(p2);

const jay = 'Jay';

//console.log(p1 instanceof Person); // true
//console.log(jay instanceof Person); // false

//console.log(new Person('A', 12)); // Returns Person Object - Person {firstName: 'A', birthYear: 12, calcAge: ƒ}

// Prototypes
console.log(Person.prototype); // {constructor: ƒ}
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.doSthing = function (a) {
  console.log(a);
};

p1.calcAge();

console.log(p1.__proto__);
console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(p2));

Person.prototype.species = 'Homo Sapiens';
console.log(p1.species, p2.species);
console.log(p1, p2);

console.log(p1.hasOwnProperty('firstName'));
console.log(p1.hasOwnProperty('species'));
