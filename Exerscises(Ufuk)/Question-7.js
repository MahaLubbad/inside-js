

/*
Write a function that gets a name of a month as a string and RETURNS 
which month of the year it is. iIf it is not a month it should return 0.
// Example: findTheMonth(‘August’) should return 8
                   findTheMonth(‘october’) should return 10
                    findTheMonth(‘Tuesday’) should return 0
You must use INDEXOF method
*/

const findTheMonth = (str) => {
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november' , 'december'];
if (months.includes(str.toLowerCase())){
  
  return months.indexOf(str.toLowerCase())+1 ;
}else{
  return 0 ;
}

}
console.log(findTheMonth('October'));
console.log(findTheMonth('Tuesday'));