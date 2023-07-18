// Importing Module
// Named imports
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

// console.log('Importing module');

// console.log('Start fetching...');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('Something');

// Importing everything as a Module Object
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import { cart } from './shoppingCart.js';
// import add from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   //   for (let i = 0; i < 5_000_000_000; i++) {} // Blocks UI
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${product} ${quantity} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${product} ${quantity} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // private field

// Common JS
// Export NodeJS
// export.addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${product} ${quantity} added to cart (shipping cost is ${shippingCost})`
//       );
// };

// Import
// Import in NodeJS
// const {addToCart} = require('./shoppingCart.js');

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const properClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(properClone);
