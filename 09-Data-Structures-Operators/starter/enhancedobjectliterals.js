'use strict';

// Data

const weekdays = ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
    openingHours: {
        [weekdays[3]]: {
          open: 12,
          close: 22,
        },
        [weekdays[4]]: {
          open: 11,
          close: 23,
        },
        [`day-${2+4}`]: {
          open: 0, // Open 24 hours
          close: 24,
        },
      }
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced objectliterals
    hours,
  
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

console.log(restaurant);

