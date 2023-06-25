'use strict';

// class expression. classes are still functions
// const PersonCL = class {};
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log(`Hey there ✋`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);

console.log(jessica);
// console.log(jessica.firstName, jessica.birthYear);

jessica.calcAge();

console.log(jessica);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Getters and Setters
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log(jessica.age);

console.log(jessica.fullName);

const Person = function (firstName = 'Unnamed', birthYear = '-1') {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log(`Hey there ✋`);
  console.log(this);
};

Person.prototype.sayHi = function () {
  console.log(`Hi`);
};

Person.hey();
const p1 = new Person();
p1.sayHi();
console.dir(Person);

PersonCl.hey();

console.log('Object.create');

const PersonProto = {
  calcAge() {
    return 2023 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 2002);
console.log(steven);
console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
console.log(sarah);

console.log(Person.prototype.__proto__ === Object.prototype);
console.dir(Person.prototype.constructor === Person);

// const oop = (function () {
//   // Object literal
//   const userFunctions = {
//     add: function () {
//       this.points += 1;
//     },
//     login: function () {
//       console.log('You are logged in.');
//     },
//   };

//   function userCreator(name, points) {
//     const newUser = Object.create(userFunctions);
//     newUser.name = name;
//     newUser.points = points;
//     return newUser;
//   }

//   const user = userCreator('Ryan', 3);
//   console.log(user);

//   // Sanity check

//   console.log(user.constructor === Object); // true
//   console.log(user.__proto__ === userFunctions); // true
//   console.log(userFunctions.constructor === Object); // true
//   console.log(userFunctions.__proto__ === Object.prototype); // true
// })();
