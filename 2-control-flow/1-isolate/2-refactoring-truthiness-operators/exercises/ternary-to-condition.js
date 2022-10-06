// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of a ternary

// try different values and different types
const isVegetarian = 0;
console.log(isVegetarian);
let favoriteFood = Boolean(isVegetarian)===true;
if (favoriteFood){
  favoriteFood = 'beans';
}else{
  favoriteFood = 'bacon';
}
console.log(favoriteFood);

/*
const favoriteFood = isVegetarian ? 'beans' : 'bacon';
console.log(favoriteFood);
*/

console.log('-- end --');
