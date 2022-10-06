// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---
temp = d;    // temp = 'x'
d = c ;       // d ='z'
c = a ;      // c ='y'
a = b ;      // a = 'w'
b = temp ;     // b= 'x'


// --- test final values ---
console.assert(a === 'w', 'Test 1');  // a,b

console.assert(b === 'x', 'Test 2');  //b,d

console.assert(c === 'y', 'Test 3');  //c,a

console.assert(d === 'z', 'Test 4');   //d,c

console.assert(temp === 'x', 'Test 5');

console.log('-- end --');
