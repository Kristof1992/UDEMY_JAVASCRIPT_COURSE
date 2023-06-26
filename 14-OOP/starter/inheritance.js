'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const Person = function (fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (fullName, birthYear, course) {
  Person.call(this, fullName, birthYear);
  this.course = course;
};

// Activate Inheritance I
// Student.prototype.__proto__ = Person.prototype;
// // Activate Inheritance II - Preferred way by JS for some reason
Student.prototype = Object.create(Person.prototype); // {prototype: Person.prototype}

// // Activate Inheritance III
// const objLiteral = {};
// objLiteral.prototype = Person.prototype;
// Student.prototype.__proto__ = objLiteral.prototype;

const steve = new Person('Steve', 1941);
const joshua = new Student('Mike', 1999, 'Computer Science');

steve.calcAge();
joshua.calcAge();

console.log(steve);
console.log(joshua);

console.dir(Student.prototype.constructor);

console.log(joshua instanceof Student);
console.log(joshua instanceof Person);

console.log(joshua);
