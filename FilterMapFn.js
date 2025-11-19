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

console.log(ans);


