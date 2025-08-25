/*
  Implement a function isPalindrome which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
let filterstr = str.toLowerCase().split('').filter((char=>(char !== "?" && char !== " " && char!== "," && char !== "." && char !== '!'))).join('');
let reversestr = filterstr.split('').reverse().join('');

  return reversestr == filterstr ;

}

module.exports = isPalindrome;

console.log(isPalindrome("radar"));

console.log(isPalindrome("A man, a plan, a canal  Panama"));