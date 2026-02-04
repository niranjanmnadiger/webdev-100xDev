//importing interface within another interface!!

interface Address {
    houseNo: number,
    street: string,
    city: string,
    pincode: number
}

interface User {
    name: string,
    age: number,
    mail: string,
    address?: Address       //address is optional here
}

interface Work {
    employeeId: number,
    domain: string,
    address: Address
}

let user: User = {
    name: "niranjan",
    age: 23,
    mail: "niranjan@work.com",

}

function isLegal(user: User): boolean {

    if (user.age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(user))