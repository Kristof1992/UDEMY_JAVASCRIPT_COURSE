/*
 *  Sets take an iterable as argument
 */
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Cake'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');

print(ordersSet);
ordersSet.delete('Risotto');
print(ordersSet);

// ordersSet.clear();

for (const order of ordersSet) console.log(order);

/*
 *   Example use case
 */

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Extracts values from Set
print(staffUnique);

print(new Set('carrot').size); // 5 unique elements

function print(arg) {
  console.log(arg);
}
