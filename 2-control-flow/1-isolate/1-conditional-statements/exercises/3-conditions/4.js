// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use value1, value2 & value3 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

const value1 = '200';
const value2 = 200;
const value3 = false;
let path = '';

if (value3) {
  path = 'if';
} else if (typeof value1 === typeof value2) {
  path = 'else if 1';
} else if (!value3 && Number(value1) === Number(value2)) {
  path = 'else if 2';
} else {
  path = 'else';
}

console.assert(path === 'else if 2', 'path should be "else if 2"');

console.log('-- end --');
