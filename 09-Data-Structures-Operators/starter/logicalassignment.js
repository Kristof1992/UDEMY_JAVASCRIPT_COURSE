'use strict';

// Data
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
  
    // *** Destructuring object on the fly and using it ***
    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is uour delicious pasta with ${ing1} ${ing2} ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(`Here is your delicious pizza with main ingredient ${mainIngredient} and other ings ${otherIngredients}`);
    },
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
};

const rest1 = {
    name: 'Capri',
    numGuests: 20
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

const rest3 = {
    name: 'La Piazza',
    numGuests: 0,
    owner: 'Giovanni Rossi'
};

const rest4 = {
    name: 'La Piazza',
    numGuests: 0,
    owner: 'Giovanni Rossi'
};

const rest5 = {
    name: 'La Piazza',
    numGuests: 0,
    owner: 'Giovanni Rossi'
};

// TEST NULLIOSH
const rest6 = {
    name: 'La Piazza',
    numGuests: null,
    owner: 'Giovanni Rossi',
};

const rest7 = {
    name: 'La Piazza',
    numGuests: undefined,
    owner: 'Giovanni Rossi',
};

// No property assigned
const rest8 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// This operator assigns a value to the variable if its value is currently Falsy.
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Wrong value because || doesn't care about Falsy values
rest3.numGuests ||= 10;

// Nullish Assignment Operator - only assigns when value is null or undefined
rest4.numGuests ??= 10;

// Property MUST exist then assige value
rest5.owner &&= '<ANONYMOUS>';

// Covers: No property, null, undefined
rest6.numGuests ??= 10;
rest7.numGuests ??= 10;
rest8.numGuests ??= 10;

console.log(rest1);
console.log(rest2);
console.log(rest3);
console.log(rest4);
console.log(rest5);
console.log(rest6);
console.log(rest7);
console.log(rest8);



