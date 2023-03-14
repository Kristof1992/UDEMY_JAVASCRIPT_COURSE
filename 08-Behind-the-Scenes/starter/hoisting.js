// console.log(me); // The variable is accessible but not initialized.
// console.log(job); // Cannot access before initialization.
// console.log(year); // Cannot access before initialization.

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// console.log(addDecl(6,7));
// console.log(addExpr(6,7));
// console.log(addArrow(6,7));

// Functions
function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a = b;
}

var addArrow = (a,b) => a = b;

// Example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1; // Creates a property on the window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);