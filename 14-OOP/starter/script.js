'use strict';

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prorotype
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this - creates as many functions as objects
  this.calcAge = function () {
    console.log(2023 - this.birthYear);
  };
};

const p1 = new Person('Jonas', 1991);
const p2 = new Person('Jack', 1975);
//console.log(p1); // Person {firstName: 'Jonas', birthYear: 1991, calcAge: ƒ}
//console.log(p2);

const jay = 'Jay';

//console.log(p1 instanceof Person); // true
//console.log(jay instanceof Person); // false

//console.log(new Person('A', 12)); // Returns Person Object - Person {firstName: 'A', birthYear: 12, calcAge: ƒ}

// Prototypes
console.log(Person.prototype); // {constructor: ƒ}
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.doSthing = function (a) {
  console.log(a);
};

p1.calcAge();

console.log(p1.__proto__);
console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(p2));

Person.prototype.species = 'Homo Sapiens';
console.log(p1.species, p2.species);
p1.species = 'Kokote';
console.log(p1, p2);

console.log(p1.hasOwnProperty('firstName'));
console.log(p1.hasOwnProperty('species'));
const p3 = new Person('Jenny', 1970);
console.log(p3);

console.log(p1.__proto__);
console.log(p1.__proto__.__proto__);
console.log(p1.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 3, 44, 4, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

const Animal = function (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log('Eating');
};

Animal.prototype.sleep = function () {
  console.log('Sleeping');
};

Animal.prototype.prop1 = 'prop1';
Animal.prototype.prop2 = 'prop2';

const cat = new Animal('Cirmi');
const dog = new Animal('Cesar');

function Factory() {
  this.foo = 1;
  this.bar = 'string';
}

let obj = new Factory();

Factory.prototype.example = 'Im a property of Factory.prototype';

console.log(obj.example);

console.log(Object.getPrototypeOf(Factory.prototype)); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(Factory.prototype) === Object.prototype); // true

Object.prototype.test = "I'm a property of Object.prototype";

console.log(Factory.prototype.test); // I'm a property of Object.prototype

Function.prototype.prox = "I'm a a property of Function.prototype";

const Shop = function () {
  this.myprop = 15;
};

Shop.prototype.shopProperty = 'Shop Property!';
Factory.prototype.factoryProperty = 'Factory Property!';

Object.prototype.publicprop = 'Visible Everywhere!';

console.log(Shop.prototype.shopProperty);
console.log(Object.prototype.shopProperty);

console.log(Shop.prototype.shopProperty);
console.log(Factory.prototype.factoryProperty);

console.log(Object.prototype.shopProperty);
console.log(Function.prototype.shopProperty);

// Tests
console.log(Object.getPrototypeOf(Shop) === Function.prototype); // It is an Object, but its type is defined dynamically once instantiated!!!
console.dir(Shop);

// Test Object

const testArea = (function () {
  console.log('Test Area:');
  // console.log(typeof Object); // function
  // console.log(typeof new Object()); // object
  // console.log({}.__proto__ === Object.prototype); // true

  const funcInstance = function () {};
  // console.log(funcInstance.__proto__ === Function.prototype); true
  console.log(funcInstance.prototype);

  const Parent = function () {};
  Parent.prototype.isChild = function () {
    console.log('isChild()');
  };
  const parent1 = new Parent();
  const Wood = function () {};

  Wood.prototype.__proto__ = Parent.prototype;

  const woodInstance1 = new Wood();
  woodInstance1.isChild();

  // Object.getPrototypeOf(woodInstance1) === woodInstance1.__proto__ // true, they are exactly the same
  // console.log(Wood.prototype === woodInstance1.__proto__); // true, the Wood.prototype created woodInstance1 therefore woodInstance1.__proto__ exists
  // console.log(Wood.prototype); Container object to store what is needed to create a new Wood instance
  // console.log(Wood.__proto__ === Function.prototype); // true, Function.prototype is a Function Object
  // console.log(Wood.constructor === Function); // true
  // console.log(Wood.__proto__.__proto__ === Object.prototype); // true
  // console.log(woodInstance1.constructor === Wood); // true

  Object.getPrototypeOf(woodInstance1) === woodInstance1.__proto__; // true, they are exactly the same
  Wood.prototype === woodInstance1.__proto__; // true, the Wood.prototype created woodInstance1,
  //                                             therefore woodInstance1.__proto__ exists
  Wood.prototype; // Container object to store what is needed to create a new Wood instance
  Wood.__proto__ === Function.prototype; // true, Function.prototype is a Function Object
  Wood.constructor === Function; // true
  Wood.__proto__.__proto__ === Object.prototype; // true
  woodInstance1.constructor === Wood; // true
  woodInstance1.constructor === Object; // false

  console.log(woodInstance1);
  const arr = ['a', 'b'];
  console.log(arr);
  console.log(arr.hasOwnProperty(0));
  console.log(Array.from(arguments));

  console.log(typeof Array);
  console.log(typeof Object);
  console.log(typeof Function);
  console.log(typeof Array.prototype);
  console.log(typeof Function.prototype);
  console.log(typeof Object.prototype);

  console.log(Array.__proto__ === Function.prototype);

  console.log(Function.__proto__ === Function.prototype);
  console.log(Function.constructor === Function);

  console.log(Object.__proto__ === Function.prototype);
  console.log(Object.constructor === Function);
})();

const oop = (function () {
  // Object literal
  const userFunctions = {
    add: function () {
      this.points += 1;
    },
    login: function () {
      console.log('You are logged in.');
    },
  };

  function userCreator(name, points) {
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.points = points;
    return newUser;
  }

  const user = userCreator('Ryan', 3);
  console.log(user);

  // Sanity check

  console.log(user.constructor === Object); // true
  console.log(user.__proto__ === userFunctions); // true
  console.log(userFunctions.constructor === Object); // true
  console.log(userFunctions.__proto__ === Object.prototype); // true
})();

const oopNew = (function () {
  function UserCreator(name, points) {
    this.name = name;
    this.points = points;
  }

  UserCreator.prototype.add = function () {
    this.points += 1;
  };

  const user = new UserCreator('Ryan', 3);
  console.log(user);
})();

const oopInheritance = (function () {
  function UserCreator(name) {
    this.name = name;
  }

  UserCreator.prototype.sayName = function () {
    console.log(`${this.name}`);
  };

  function PaidUserCreator(paidName, balance) {
    UserCreator.call(this, paidName);
    this.balance = balance;
  }

  PaidUserCreator.prototype.__proto__ = UserCreator.prototype;

  const user1 = new UserCreator('RyanY');
  const paidUser = new PaidUserCreator('RyanX', 15);
  console.log(user1);
  console.log(paidUser);
  paidUser.sayName();
})();
