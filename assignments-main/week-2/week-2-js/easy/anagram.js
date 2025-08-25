/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


let str1 = "nirus"
let str2 = "surni";
function isAnagram(str1, str2) {

  // Remove spaces and convert to lowercase
  str1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join('') 
  str2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join('')

  return str1 === str2;
}
/*
.replace(/\s+/g,"") will replace all the spaces between the sting with blank arrays 
.toLowerCase() --> this will convert any upper case to lower case
.split() - this converts string to array
.sort() will sort the array
.join() will convert array to string 
*/
// Test cases
console.log(isAnagram("niri","ravi")); // false 
console.log(isAnagram(str1, str2)); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

