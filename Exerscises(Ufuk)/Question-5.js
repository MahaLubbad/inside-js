/*
Write a function that takes an array as an argument. 
Your task is to write the repeating elements in 
the array at the end of the array. 
Return the original array if no duplicate items. 
If there is more than one repeating element, 
sort the repeating elements from smallest to largest.
*/



function findDuplicate(arr) {
let coppiedArray = [...arr]
let duplicateElements = coppiedArray.filter((item, index) => coppiedArray.indexOf(item) !== index);

duplicateElements = duplicateElements.concat(duplicateElements);
duplicateElements.sort((a,b) => a -b );

const nonduplicateElements = coppiedArray.filter(element => !duplicateElements.includes(element) );
 
 //console.log(duplicateElements);
//console.log(nonduplicateElements);

return nonduplicateElements.concat(duplicateElements);
}
console.log(findDuplicate([1,2,4,5,4,8]));
console.log(findDuplicate([1,2,3]));
console.log(findDuplicate([5,5,1,6,7,4]));
console.log(findDuplicate([1,2,11,2,5,11]));

/*
findDuplicate([1,2,4,5,4,8]) should return [1,2,5,8,4,4]
findDuplicate([1,2,3]) should return [1,2.3]
findDuplicate([5,5,1,6,7,4]) should return [1,6,7,4,5,5]
findDuplicate([1,2,11,2,5,11]) should return [1,5,2,2,11,11]
*/