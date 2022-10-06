// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'maha';
const lastName = 'ashour';
console.log(firstName, lastName);
let aName = firstName[0]==='A';
if (!aName){
  aName = lastName[0]=== 'A';
}
console.log(aName);

/*
const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
console.log(hasAnAName);
*/

console.log('-- end --');
