'use strict';

// Data
const weekdays = ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced object literals
    openingHours,
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
  
    // *** Destructuring object on the fly and using it ***
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is uour delicious pasta with ${ing1} ${ing2} ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(`Here is your delicious pizza with main ingredient ${mainIngredient} and other ings ${otherIngredients}`);
    },
};

const days = ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'N/A';
    // console.log(`On ${day} we open at ${open}`);
}

// Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [{name: 'David', email: 'hello@david.io'}
];

// *** Looping Objects ***
// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties) {
    openStr += `${day}, `;
}

console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}