/*Write a function called findFileFormat 
that takes a string as an argument which 
returns the correct format of the uploaded file.
*/
const findFileFormat = (filename) => { 
    return filename.split('.').pop();
    
    }
    //findFileFormat(”image.png”) ⇒ png
    findFileFormat('image.png');
    console.log(findFileFormat('image.png'));
    //findFileFormat(”nature.pdf”) ⇒ pdf
    console.log(findFileFormat('nature.pdf'));
    //findFileFormat(”baby.jpeg”) ⇒ jpeg
    console.log(findFileFormat('baby.jpeg'));
    //Tips : [String split method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
    