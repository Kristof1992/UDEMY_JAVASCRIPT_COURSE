'use strict';

// IIFE
(function () {
  console.log('Executed');
  const isPrivate = 23;
})();

// IIFE with Lambda
(() => console.log('Once with lambda too.'))();

// Block scoped - available only inside
{
  const isPrivate = 23;
  let isStillPrivate = 55;
  var notPrivate = 46;
}

console.log(notPrivate);
