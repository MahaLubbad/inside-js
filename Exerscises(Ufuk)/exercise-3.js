/*Write a function called guessGame that takes 
an argument as a number.
*/
const guessGame =( num) =>{

    //Generate a number between 1,5 (inclusively).
    
    let min = Math.ceil(1);
      let max = Math.floor(5);
      
    let randomNum = Math.floor(Math.random() *(max -min +1) + min); 
    console.log(randomNum);
    //If your argument is bigger than generated number return “Bigger”
    if (num > randomNum){
      return 'Bigger';
    }
    //If your argument is smaller than generated number return “Smaller”
    if (num < randomNum){
      return 'Smaller';
    }
    //If your argument is equal to generated number return “Congrats”
    if (num === randomNum){
      return 'Congrats';
    }
    }
     
    //guessGame(5) and generated number is 3 ⇒ Bigger
    guessGame(5) ;
    
    
    console.log(guessGame(5));
    //Tips : [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
    