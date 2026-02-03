// in interfaces - you define everything at ones - and use it forever - same goes with types but with a slight diffrence between them!

interface UserType {    // custome interface!!
    names: string,
    age: number,
    email: string
}

let user1: UserType = {

    names: "niranjan",
    age: 23,
    email: "niranjan@niranjan.com"
}

function greetUser(user: UserType) {

    console.log(`hello ${user.names}`);
    console.log(`your age is ${user.age}`);
    console.log(`and to contact you - ${user.email}`);
}

greetUser(user1);
