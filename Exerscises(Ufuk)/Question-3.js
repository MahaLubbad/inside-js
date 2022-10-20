/*
Write a function that takes an array as an argument and removes 
the biggest value of the given array. Do not mutate the original 
array(you need to copy the given array. Remember which methods were 
using a copy of the original array or how you can copy an original array). 
If multiple elements have the same value, remove the one with a lower index. 
If you get an empty array, return an empty array.
*/

function removeBiggest(arr){
  let newArr = [...arr];
  //console.log(arr);
//console.log(newArr);
 const biggestNumber = Math.max(...newArr);
console.log(biggestNumber);
const biggestIndex = newArr.findIndex((x) => x === biggestNumber );
console.log(biggestIndex);
 newArr.splice(biggestIndex,1);
 return console.log(newArr);

}
removeBiggest([1,2,6,4,5]);
removeBiggest([5,3,2,5,4]);
removeBiggest([2,8,11,27,1]);
removeBiggest([]);
//Input: [1,2,6,4,5],output = [1,2,4,5] 
//Input: [5,3,2,5,4],output = [3,2,5,4] 
//Input: [2,8,11,27,1],output = [2,8,11,1]
//Input: [], output = [] 