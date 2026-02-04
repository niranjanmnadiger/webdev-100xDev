
interface User {
    name: string;
    age: number;
    email: string;
    address?: {         //to make any property optional, use ?, so that it wont throw up any error or alert if not defined
        homeNo: number;
        street: string;
        city: string;
        pincode: number
    }
}

let user: User = {
    name: "niranjan",
    age: 12,
    email: "niranjan@gmail.com",
    address: {
        homeNo: 11,
        street: "bengaluru street",
        city: "bengaluru",
        pincode: 560001
    }
}

let user2: User = {
    name: "niranjan",  //here you can see the address is not added as the address is optional in the interface
    age: 23,
    email: "niranjan@gmail.com"
}

function isLegalToVote(user: User): boolean {

    if (user.age > 18) {
        return true
    } else {
        return false
    }
}

console.log(isLegalToVote(user));
console.log(isLegalToVote(user2));

