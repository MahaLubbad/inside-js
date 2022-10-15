// #todo

'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);


let reverseUpperCase = '';
const originalStringUpperCase = originalString.toUpperCase();

for (let i= 0; i < originalString.length; i++) {
  let nextchar = originalStringUpperCase[i];
  reverseUpperCase =   nextchar + reverseUpperCase.toUpperCase();
 
}


console.assert(
  reverseUpperCase === 'EDCBA',
  'reversed string is the original reversed',
);

console.log('-- end --');
