


const calculateEarnings = (inComeArr , outComeArr , day )=>{
  weekdayArr = ['Monday' , 'Tuesday' , 'Wedneday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
   
  let sum = 0;
  for (let i = 0 ;i < weekdayArr.length; i++ ){

    sum += inComeArr[i] + outComeArr[i] ;
   if(day === weekdayArr[i]){
     break;
   }
  }
return sum;
}



console.log(calculateEarnings([40, 30, 25, 10, 39, 99, 100], [-10, -5, -20, -3, -5, -9, -10], 'Wedneday')) // 60
console.log(calculateEarnings([4, 15, 50, 0, 39, 200, 0], [-80, -4, -56, 0, 0, -18, -30], 'Saturday')) // 150