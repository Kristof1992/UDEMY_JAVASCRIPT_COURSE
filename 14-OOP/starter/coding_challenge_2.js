'use strict';

// Coding Challenge #2

class Car {
  constructor(make = 'N/A', speed = -1) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(`DATA CAR: '${this.make}' going at '${this.speed}km/h'`);
  };
  brake = function () {
    this.speed -= 5;
    console.log(this.speed);
  };

  set speedUS(speed) {
    this.speed = speed * 1.6; // miles * 1.6 = kilometres
  }

  get speedUS() {
    return this.speed / 1.6; // kilometres / 1.6 = miles
  }
}

const c1 = new Car('Ford', 120);
// DEFAULT
console.log(c1.speed);
c1.accelerate(); // 130
c1.accelerate(); // 140
c1.brake(); // 135
c1.speedUS = 50;
console.log(c1);
