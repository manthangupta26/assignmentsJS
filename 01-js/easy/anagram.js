/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length !== str2.length){
    console.log("They cannot be anagram");
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let frequencyCount = {}
  for(let i=0; i<str1.length ; i++){
    let char = str1[i];
    frequencyCount[char] = (frequencyCount[char] || 0) + 1;
  }
  
  for(let i=0; i<str2.length; i++){
    let char = str2[i];
    frequencyCount[char] = (frequencyCount[char] || 0) - 1;
  }

  for(let char in frequencyCount){
    if (frequencyCount[char]!== 0){
      console.log("They are not Anagram")
      return false;
    }
  }

  console.log("They are Anagram");
}

isAnagram("hello","!hello")

module.exports = isAnagram;
