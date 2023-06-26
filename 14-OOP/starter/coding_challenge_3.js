'use strict';

// Coding Challenge #3

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

Car.prototype.setSpeedUS = function (speed) {
  this.speed = speed * 1.6; // miles * 1.6 = kilometres
};

Car.prototype.getSpeedUS = function () {
  return this.speed / 1.6; // kilometres / 1.6 = miles
};

const EV = function (make = 'N/A', speed = -1, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Inheritance
EV.prototype = Object.create(Car.prototype); // Object.create() will return {__proto__: Car.prototype}, sets 'this' to point to Car.prototype
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  console.log(
    this.charge,
    (this.charge * 1) / 100,
    this.charge - (this.charge * 1) / 100
  );
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// EV.prototype.__proto__ = Car.prototype; // Can't use this due to performance issues

const c1 = new Car('Ford', 120);
const ev1 = new EV('Tesla', 100, 23);

console.log(c1);
console.log(ev1);

ev1.accelerate();
console.log(ev1.speed);
ev1.chargeBattery(90);
console.log(ev1);

const ev2 = new EV('Mercedes-E', 120, 50);

console.dir(EV.prototype.constructor === EV);
