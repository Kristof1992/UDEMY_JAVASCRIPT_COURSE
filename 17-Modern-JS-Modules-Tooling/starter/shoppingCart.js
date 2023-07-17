// Exporting Module
console.log('Exporting module');
// export '/.shoppingCart';
console.log('Start fetching users EXP');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching users EXP');

// Variables declared in a module are scoped to the Module itself.
// By default top level variables are private!!!
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
}
// for (let i = 0; i < 9_000_000_000; i++) {}
