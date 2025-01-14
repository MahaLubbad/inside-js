
/*
Write a function that checks the occurrence of "a" and "b" to see 
if a string has the same amount of 'a's and 'b's. The method must return
 a boolean and be case insensitive. The string can contain any char.
*/
/*
function abTest (str) {
// logic here
let countA = 0;
let countB = 0;
for(let i =0; i < str.length ; i ++){
if(str[i]==='a'||str[i]==='A'){
  countA +=1;
}
if(str[i]==='b'||str[i]==='B'){
  countB +=1 ;
}
}

return countA === countB;
}
*/
function abTest (str) {

 const arr = str.split('');
  const charA = arr.filter((char) => char==='a'|| char === 'A' );
 const  aLength = charA.join().length ;

  const charB = arr.filter((char) => char ==='b' || char === 'B' );
  const  bLength = charB.join().length ;
  
return aLength === bLength ;
}

console.log(abTest('aabb'));
console.log(abTest('baabb'));
console.log(abTest('aabBm'));
console.log(abTest('zpzpzpp'));
console.log(abTest('zzaa'));

/*
abTest("aabb") => should return true
abTest("baabb") => should return false
abTest("aabBm") => should return true
abTest("zpzpzpp") => should return true // when no 'a' and 'b' is present should return true
abTest("zzaa") => should return false
*/