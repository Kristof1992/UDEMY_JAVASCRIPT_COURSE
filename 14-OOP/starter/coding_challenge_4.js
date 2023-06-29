'use strict';

// Coding Challenge #4

class CarCl {
  constructor(make = 'N/A', speed = -1) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`DATA CAR: '${this.make}' going at '${this.speed}km/h'`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  set SpeedUS(speed) {
    this._speed = speed * 1.6; // miles * 1.6 = kilometres
  }

  get SpeedUS() {
    return this._speed / 1.6; // kilometres / 1.6 = miles
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const c1 = new CarCl('Ford', 120);
const ev1 = new EVCl('Tesla', 100, 23);

console.log(c1);
console.log(ev1);

ev1.accelerate();
console.log(ev1.speed);
ev1.chargeBattery(90);
console.log(ev1);

const ev2 = new EVCl('Mercedes-E', 120, 50);

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.SpeedUS);
