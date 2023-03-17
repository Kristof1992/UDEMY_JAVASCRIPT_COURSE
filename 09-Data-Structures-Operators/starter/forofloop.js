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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// *** For of loop ***
for(const i of menu) console.log(i);

for(const item of menu.entries()) {
    console.log(item);
}

// We can create a list of entries w spread operator
console.log([...menu.entries()]);

for(const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}