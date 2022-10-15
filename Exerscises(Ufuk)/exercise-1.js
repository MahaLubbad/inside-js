/*Write a function called findEvenSums that takes two arguments. 
Find the sum of the even numbers between these two numbers. 
You can free to choose any solution.
*/
const findEvenSums = (num1 ,num2) => {
    let sum = 0
    if (num1<num2){
  for (let i = num1 ; i<= num2  ; i++){
    if(i%2 === 0){
    
      sum += i ;
    }
  }
  }else if(num1 > num2){
    for(let j = num1 ; j>= num2 ; j--){
      if(j%2 === 0){
    
        sum += j ;
    }
  }
  }
  return sum ;
  }
  
  //findEvenSums(6,10) ⇒ 6+8+10 ⇒ 24
  findEvenSums (6,10);
  console.log('(6,10) ' + findEvenSums (6,10));
  //findEvenSums(10,6) ⇒ 6+8+10 ⇒ 24
  findEvenSums (10,6)
  console.log(findEvenSums (10,6));
  //findEvenSums(”15”,”10”) ⇒ 10+12+14 ⇒ 36
  findEvenSums(15,10)
  console.log(findEvenSums(15,10));
  //Tips :
  
  //You may need to use Number coercion.
  
  //Remember using break or continue in loops
  
  //You may need to sort arguments. (useful link ⇒[https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa#:~:text=max() function returns the largest of zero or more numbers.&text=of Math object-,The Math.,of zero or more numbers.&text=The destructuring assignment syntax is,or objects into distinct variables](https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa#:~:text=max()%20function%20returns%20the%20largest%20of%20zero%20or%20more%20numbers.&text=of%20Math%20object-,The%20Math.,of%20zero%20or%20more%20numbers.&text=The%20destructuring%20assignment%20syntax%20is,or%20objects%20into%20distinct%20variables).)
  