let user: {         // this is how exactly you have to define an object in TS!
    names: string,   // where you wont lose out the belifits of TS 
    age: number,     // which is you can't feed number in the place of names - which is a string!!
    email: string
} = {
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

greet({
    names: "niranjan",
    age: 31,
    email: "niruss"
})