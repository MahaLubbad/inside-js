// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = '9000';
let isBigNumber = typeof a === 'number';

if (isBigNumber ){
  isBigNumber = a > 1000  ;
}
console.log(isBigNumber);
console.log(a);
/*
const isBigNumber = typeof a === 'number' && a > 1000;
console.log(isBigNumber);
*/
console.log('-- end --');
