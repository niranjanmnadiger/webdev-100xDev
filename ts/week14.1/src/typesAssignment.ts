// interfaces and types Assignment

type User = {
    name: string,
    age: number,
    ipAddress: string

}

type Admin = {
    name: string,
    permissions: string
    access: boolean

}

type UserOrAdmin = User | Admin

function greetUser(user: UserOrAdmin) {
    console.log(`hello ${user.name}`);

}

let u: User = {
    name: "niranjan",
    age: 22,
    ipAddress: "1.1.1.19"

}

greetUser(u);