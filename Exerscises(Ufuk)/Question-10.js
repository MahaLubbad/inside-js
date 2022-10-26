

// A Narcissistic Number is a number which is the sum of its own 
// digits, each raised to the power of the number of digits.
// for example, 153 (3 digits), you can see 153 = 1^3 + 5^3 + 3^3
// here 3 is the number of digits contained in 153.
// your job to discover the narcissistic number form this example 

const narcissistic = (num) => {
  const numArr = String(num).split('');
  //console.log(typeof numArr);
  const power = numArr.length;
  //console.log(power);
  let newNum = 0;
  
  for(let i = 0; i < power ; i++){
  
  newNum += Math.pow(numArr[i],power) ;

  }
  
  return newNum === num;
  
}

//console.log(newNum);

console.log(narcissistic(153)) // return true 
console.log(narcissistic(1634)) // return true 
console.log(narcissistic(234)) // return false
console.log(narcissistic(407)) // return true 