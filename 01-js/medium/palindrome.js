/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strLower = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let start = 0;
  let end = strLower.length-1 ;
  
  while(start < end){
    if(strLower[start] !== strLower[end]){
      console.log("Not Palindrome");
      return false;
    }
    start++ ;
    end-- ;
  }
  console.log("Palindrome");

}

isPalindrome("A man a plan a canal Panama")

module.exports = isPalindrome;
