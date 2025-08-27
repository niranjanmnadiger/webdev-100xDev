// map and filter function
// given an array , give back a new array in which every value is multiplied by 2
//[1,2,3,4,5]
//op: [2,4,6,8,10]

/* one way 

const arr = [1,2,3,4,5];

//solution
const newarr = [];

for(let i= 0; i< arr.length;i++){
    newarr.push(arr[i] * 2);

}

console.log(newarr);

*/

// 2nd approach - we know a funtion can take another function as ip 

const arr = [1,2,3,4,5];

function transform(i){
    return i*2;
}

const ans = arr.map(transform);
// syntax -> array.map(function);

console.log(ans);

console.log(transform(1));


arr2 = [{id: 1, text: 'first todo'},
       {id: 2, text: 'second todo'},
       {id:3, text: 'third todo' }]

let j = arr2.map(texts => texts.text);
let i = arr2.map(item => item.text);
console.log(i);


console.log(j);

//whenever you are being told to transform arrays , you use map() function
