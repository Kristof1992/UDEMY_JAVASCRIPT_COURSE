'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// Destructuring Objects
const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// Destructuring Objects with different variable names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Destructuring Objects with default values
const {mainMenu = [], starterMenu: starters = []} = restaurant;
console.log(mainMenu, starters);

// *** Mutating multiple variables ***
let u = 111;
let o = 999;
const v = {u: 23, o: 7, c0: 14};
({u, o} = v); // Extract property value and mutate variables

console.log(u, o);

// Nested Objects
const {fri: {open: op, close: clo} } = openingHours;
console.log(op, clo);

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

// Leaving one out
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2,4, [5,6]];
// const [i, , j] = [nested];
// console.log(nested);
const [i, , [j, k]] = nested;
console.log(i,j,k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

// function traverse(arr) {
//   for(let i=0;i<arr.length;i++) {
//     if(!isNaN(arr[i])) {
//       console.log(arr[i]);
//     } else {
//       traverse(arr[i]);
//     }
//   }
//   return;
// }

// traverse(nested);