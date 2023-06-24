'use strict';

// class expression. classes are still functions
// const PersonCL = class {};
// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);

console.log(jessica);
console.log(jessica.firstName, jessica.birthYear);

jessica.calcAge();

console.log(jessica);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
