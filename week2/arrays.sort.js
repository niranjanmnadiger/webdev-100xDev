let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.sort());

console.log(arr.sort((a,b)=>a-b)); 

console.log(arr.sort((a,b)=>b-a));

console.log(arr.sort((a,b)=>a-b).reverse());
console.log(arr); 
console.log(arr.reverse())