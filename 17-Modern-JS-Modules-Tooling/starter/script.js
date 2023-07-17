// Importing Module
// Named imports
import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

console.log('Importing module');

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

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  //   for (let i = 0; i < 5_000_000_000; i++) {} // Blocks UI
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);
