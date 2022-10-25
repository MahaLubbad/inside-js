
/*
 write a function that ll accept two arrays 
 (one earnings which can be positive numbers or zero,
another one with spendings which can be negative numbers and zero) 
and a weekday, and returns the total amount of cash that should
 have been in the safe at the end of the given day.
PS: The week is assumed to be starting from Monday.
*/

//           ************     Solution 1      **********

/* 
const calculateEarnings = (inComeArr , outComeArr , day )=>{
  weekdayArr = ['monday' , 'tuesday' , 'wedneday' , 'thursday' , 'friday' , 'saturday' , 'Sunday'];
   
  let sum = 0;
  for (let i = 0 ;i < weekdayArr.length; i++ ){

    sum += inComeArr[i] + outComeArr[i] ;
   if(day.toLowerCase() === weekdayArr[i]){
     break;
   }
  }
return sum;
}
*/


 //         ************       Solution 2   **********


const calculateEarnings = (inComeArr , outComeArr , day )=>{
  weekdayArr = ['monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday' , 'Sunday'];

 let i =  weekdayArr.indexOf(day.toLowerCase());
 
 let income = inComeArr.slice(0,i+1);

 let outcome = outComeArr.slice(0,i+1);


 let incomeSum = income.reduce((previousValue, currentValue) => previousValue + currentValue);
  
let outcomeSum = outcome.reduce((previousValue, currentValue) => previousValue + currentValue);

  const result = incomeSum + outcomeSum ;

return result ;
}


console.log(calculateEarnings([40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], 'Wednesday')) // 60
console.log(calculateEarnings([4, 15, 50, 0, 39, 200, 0], [-80, -4, -56, 0, 0, -18, -30], 'Saturday')) // 150