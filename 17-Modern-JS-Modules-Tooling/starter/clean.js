'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Immutable Object - No new properties can be added to the object - Doesn't apply to nested objects
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = (limits, user) => limits?.[user] ?? 0;
/**
 *
 * @param {*} value transaction value + or -
 * @param {*} description  transaction name
 * @param {*} user  user name
 */
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  // if the property name is the same as the variable name it will add the value to the proper object field.
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user }]
    : state;
};

const budget1 = addExpense(budget, spendingLimits, 1000, 'Pizza 🍕');
console.log(budget1);
const budget2 = addExpense(
  budget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log(budget2);
const budget3 = addExpense(budget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget3);

const currentBudget = budget
  .map(el => el.value)
  .reduce((acc, currentValue) => acc + currentValue);

const checkExpenses2 = function (state, limits) {
  return state.map(obj => {
    return obj.value < -getLimit(limits, obj.user)
      ? { ...obj, flag: 'limit' }
      : obj;
  });
  // for (const entry of budget)
  //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
};

const checkExpenses = (state, limits) => {
  state.map(obj => {
    obj.value < -getLimit(limits, obj.user) ? { ...obj, flag: 'limit' } : obj;
  });
};
checkExpenses(budget3);

// console.log(budget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(obj => obj.value <= -bigLimit)
    // .map(obj => `${obj.description.slice(-2)}`)
    // .join(' / ');
    .reduce((str, cur) => `${str} ${cur.description.slice(-2)} /`, '')
    .slice(0, -1);
  console.log(bigExpenses); // Console.logs are side effects
  /* 
  before
  str = '/' + curEmoji
  str += '/' + curEmoji
  str += '/' + curEmoji
  */
  /*
  after
  str = curEmoji + '/'
  str += curEmoji + '/'
  str += curEmoji + '/'
  remove last '/'
  */
};

logBigExpenses(budget3, 500);
