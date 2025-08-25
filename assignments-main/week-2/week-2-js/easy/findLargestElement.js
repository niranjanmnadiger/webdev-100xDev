/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
let arr = [1,3,5,6,20,11];

function findLargestElement(arr) {
    let largestelement = arr[0];
    for (let i = 0; i< arr.length;i++){
        if(arr[i]> largestelement){
            largestelement = arr[i];
        }
    }
    return largestelement;
}
console.log(findLargestElement(arr)); // calling the function 

module.exports = findLargestElement;