'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jack');

const arrow = greeting => name => console.log(`${greeting} ${name}`);

const arrowFun = arrow('Hey');
arrowFun('Jonas');

arrow('Hey')('Arrow');
