'use strict';

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// const david = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// console.log('////////////');

// david.calcAge();

// const matilda = {
//     year: 2017
// };

// matilda.calcAge = david.calcAge;

// matilda.calcAge();

// const f = david.calcAge;

// f();



const david = {
    firstName: 'David',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

        // ES5 - Solution
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // ES6 - solution
        const isMillenial = () => {
            console.log(this);
            console.log(self.year >= 1981 && self.year <= 1996);
        };

        isMillenial();

    },
    greet: () => console.log(`Hey ${this.firstName}`) // calls firstName property on Window Object
};

david.calcAge();

// const addExpr = function(a,b) {
//     console.log(arguments);
//     return a+b;
// };
// addExpr(2,5);

// const addArrow = (a,b,c) => {
//     console.log(arguments);
//     return a+b+c;
// };
// addArrow(2,5,9);