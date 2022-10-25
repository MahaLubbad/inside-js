

/*
Write a function that takes the sum of the elements of an array.
// Example calculateTheSum([4, 8, 15, 16, 23, 42])
 should return 108 You must use REDUCE method
 */

const calculateTheSum = (sumArr) => {
  return sumArr.reduce((previousValue, currentValue) => previousValue + currentValue);
}
console.log(calculateTheSum([4, 8, 15, 16, 23, 42]));