'use strict';
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum} ${name}`,
    });
  },
};

lufthansa.book(239, 'Jake Anderson');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

/*
 *** Call Method ***
 */

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 17, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 584, 'Mary Cooper');

/*
 *** Aplly Method ***
 */

const flightData = [668, 'Bradley Cooper'];

book.apply(swiss, [587, 'Judit Polgar']);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
