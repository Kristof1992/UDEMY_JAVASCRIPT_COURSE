'use strict';

// *** Data to work with

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
  
//   restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
//   });
  
//   restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 2,
//   });

// *** Spread Operator

const arr = [7,8,9];
const newA = [1,2, ...arr];

console.log(newA);
console.log(...newA); // Logs elements one by one

// Expanding an old list with a new item
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

console.log(restaurant.mainMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
restaurant.mainMenu.push('Chicken Parmesan');
restaurant.mainMenu.push('X');
restaurant.mainMenu.push('Y');

console.log(restaurant.mainMenu);

console.log(mainMenuCopy);


// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'David';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real-world example
// const ingredients = [
//     prompt('Let\'s make pasta! Ingredient 1?'),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?')
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);