/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let lowerStr = str.toLowerCase();
    let counter = 0;
    for(let i=0; i< lowerStr.length; i++){
      char =  lowerStr[i];
      if(char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'){
        counter++ ;
      } 
    }
    console.log("The number of vowels in the string is : ", counter);
}

countVowels("Hello, world!")

module.exports = countVowels;