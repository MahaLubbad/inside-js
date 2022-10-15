/*Create a function called valdiateString that takes a string as 
argument and checks the following conditions 
*/
const valdiateString = (str) => {
    //If the string is empty return “Can not be empty”
    if (str === ''){
      return 'Can not be empty';
    }
    
    //If the string character length is bigger than 10 return “Long”
    if (str.length > 10){
      return 'Long';
    }
    //If the string  has @ character return “It should not include @”
    if (str.includes('@')){
      return 'It should not include @';
    }
    //if everything is okay , return “Succesful”
    else{
      return 'Succesful';
    }
    }
    //valdiateString(”ufuk”)  ⇒ succesful
    console.log(valdiateString ('ufuk'));
    //valdiateString(”    __*ufuk__*     ”)  ⇒ successful
    console.log(valdiateString('   __*ufuk__*    '))
    //valdiateString(”hackyourfuture”)  ⇒ Long
    console.log(valdiateString ('ufuk@'));
    //valdiateString(”ufuk@”)  ⇒ It should not include @
    
    //Tips : Find proper [string methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
    