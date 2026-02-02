let user = {
    names: "Niranjan",
    age: 23,
    email: "niranjan@gmail.com"
}
let user2 = {
    names: "Niranjan M Nadiger",
    age: 23,
    email: "niranjan@gmail.com"
}

function greet(user: {
    names: string,
    age: number,
    email: string
}) {

    console.log("hello" + user.names)
    console.log(`your age is ${user.age}`)
    console.log(`your email id is ${user.email}`)
}

greet(user);
greet(user2);