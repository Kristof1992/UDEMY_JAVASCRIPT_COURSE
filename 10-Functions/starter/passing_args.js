'use strict';
const flight = 'LH234';
const john = {
  name: 'John Wick',
  passport: 24739479384,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479384) {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, john);
console.log(flight);
console.log(john);

// Same as doing this
const flightNum = flight;
const passenger = john;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(john);
checkIn(flight, john);
