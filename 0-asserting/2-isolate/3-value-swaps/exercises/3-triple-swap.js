// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// --- swap values ---
temp = a;     // temp = 'z'

a = b ;       // a = 'x'
b = c;        // b = 'y'
c = temp;    // c = 'z' 

// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === 'z';
console.assert(test3, 'Test 3');

const test4 = temp === 'z';
console.assert(test4, 'Test 4');

console.log('-- end --');
