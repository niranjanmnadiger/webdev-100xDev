
type Input = number | string;

// function firstEle(arr : input[])

function firstElement<T>(arr: T[]) {

    return arr[0];// return the fist element 
}

let el = firstElement(["niranjan", "nadiger", "age", "hello world"])

console.log(el?.toUpperCase())

let el2 = firstElement([1, 2, 3, 4, 5, 6, 6]);

let el3 = firstElement([1, "niranjan", 3, "nadiger"])

console.log(el3);
console.log(el2);
console.log(el);