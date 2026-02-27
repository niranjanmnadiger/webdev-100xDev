
type Input = number | string;

// function firstEle(arr : input[]) -- if this is the case then 
//console.log(el?.toUpperCase()) is not possible - coz toUpperCase is not applicable for numbers - so we use generics here - which keep it on a neutral adaptable ground named T - template!

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

//you have to explicitly specify if you dont want to go out of your league, like

let el4 = firstElement<string>(["niri", "niru", "nirus", "niranjan"])
// this is strictly string type - u can't add in numbers in this array anymore
// let el4 = firstElement<string>(["niri", 1 , 55 , "niranjan"]) - this gives an error coz we have strictly specified that the template will be string or null 

//we can also do this - custome type or interface other-than just string or number !!!
interface User {
    name: string,
    age: number,
    address: string
}

let el5 = firstElement<User>([
    { name: "niranjan", age: 23, address: "blr" },
    { name: "niranjan", age: 23, address: "blr" },

])
