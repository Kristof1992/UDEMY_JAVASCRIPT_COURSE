// Importing Module
// Named imports
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

console.log('Importing module');

// Importing everything as a Module Object
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import { cart } from './shoppingCart.js';
import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
