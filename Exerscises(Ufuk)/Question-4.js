
/*
Write a function that takes a string as an argument. 
Your job is to return the middle character of the word. 

If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/

//solution #1
function getMiddle(str) {
  const middle = Math.floor(str.length/2 ); 
if (str.length % 2 === 0){ 
  return str[middle-1]+str[middle];
}else{
  return str[middle];
}
}
//solution #2
function getMiddle(str) {
  if (str.length %2 ===0){
    return str.slice((str.length/2)-1,(str.length/2)+1);

  }else{
    return str.slice((str.length-1)/2,(str.length-1)/2+1);
  }
}


console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"))
console.log(getMiddle("A"))
/*
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/