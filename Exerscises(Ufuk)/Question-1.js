


function findLongestWordLength(str) {
// logic here
const arr = str.split(' ');
  let longest = 0;
for(let i=0 ; i <= arr.length-1 ;i ++){
  if (longest < arr[i].length){
    longest = arr[i].length;
  }
}
return longest;
}

const phras1 = 'Welcome to hack your future';
const longestWordLength = findLongestWordLength(phras1);
console.log(longestWordLength);

const phras2 = 'Here we will learn the basics of web development';
console.log(findLongestWordLength(phras2));

/*
findLongestWordLength("Welcome to hack your future"); should return a number.
findLongestWordLength("Welcome to hack your future"); should return 7.
findLongestWordLength("Here we will learn the basics of web development") should return 11.
*/