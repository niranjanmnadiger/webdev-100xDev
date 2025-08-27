// filtering 
// what if I tell you, given an input array , give me back all the even values from it 

const arr = [1,2,3,4,5,6,7,8,9,10];

/* 1st approcah without filter functin
const newarr = [];

for (let i =0; i< arr.length; i++){
    if(arr[i]%2 == 0){
        newarr.push(arr[i]);
    }
}

console.log(newarr);
*/

function filterlogic(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}

const ans = arr.filter(filterlogic);
console.log(ans);

/*
const ans = arr.filter(function(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
});
conole.log(ans);
*/