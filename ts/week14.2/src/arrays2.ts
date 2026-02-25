//takes user i/p from array and return 18+ users array

interface User {

    firstName: string,
    secondName: string,
    age: number

}

function filterUser(users: User[]) {
    //return user.filter((user) => user.age > 18);       this is one more easy way to do the same thing

    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i]!.age > 18) {       // this is a non-null assertation operator "!" - which tells TS that the user[i].age is not null - so we use "!" --> user[i]!.age
            ans.push(users[i]);
        }
        console.log(users[i]);
        console.log(users[i]!.age);
    }
    return ans;

}

let user: User[] = [

    { firstName: "niranjan", secondName: "nadiger", age: 19 },
    { firstName: "niranjan", secondName: "nadig", age: 21 },
    { firstName: "niranjan", secondName: "M N", age: 17 },
    { firstName: "niranjn", secondName: "n", age: 12 },
]

console.log(filterUser(user));
