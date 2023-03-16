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

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'David');
console.log('' || 'David');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1= restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Works the opposite way
console.log('--- AND ---');
console.log(0 && 'David');
// If both truthy returns the last value
console.log(7 && 'David');
console.log('Hello' && 23 && null && 'David');

// Practical example
if(restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}
// If restaurant.orderPizza exists executes restaurant.orderPizza otherwise returns undefined
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');