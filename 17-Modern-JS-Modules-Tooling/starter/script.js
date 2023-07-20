// Importing Module
console.log('Importing module');

import add, { cart } from './shoppingCart.js';
import cloneDeep from 'lodash-es';

add('pizza', 2);
// add('bread', 5);
// add('apples', 4);
console.log(cart);

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

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const peter = new Person('Peter');
const arrow = 'Peter' ?? null;

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// Polyfilling library
import 'core-js/stable';
import 'core-js/stable/promise';
import 'regenerator-runtime/runtime';
