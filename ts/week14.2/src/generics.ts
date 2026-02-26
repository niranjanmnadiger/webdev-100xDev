//generics

function identify<T>(arg: T): T {
    return arg;
}

console.log(identify<string>("niranjan"))
console.log(identify<number>(100))


let output1 = identify<string>("niranjan")

let final = output1.toUpperCase()

console.log(final)