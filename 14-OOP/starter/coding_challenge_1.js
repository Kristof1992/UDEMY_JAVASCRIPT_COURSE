'use strict';

// Coding Challenge #1

const Car = function (make = 'N/A', speed = -1) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`DATA CAR: '${this.make}' going at '${this.speed}km/h'`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const c1 = new Car('BMW', 120);
const c2 = new Car('Mercedes', 95);

// DEFAULT
console.log(c1.speed);
console.log(c2.speed);

// ACC
c1.accelerate(); // BMW, 130
c2.accelerate(); // Mercedes, 105

// Brake

c1.brake(); // BMW, 125
c2.brake(); // Mercedes, 100

console.log(c1);
console.log(c2);
