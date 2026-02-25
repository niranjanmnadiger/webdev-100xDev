"use strict";
//takes user i/p from array and return 18+ users array
Object.defineProperty(exports, "__esModule", { value: true });
function filterUser(users) {
    //return user.filter((user) => user.age > 18);
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
        console.log(users[i]);
        console.log(users[i].age);
    }
    return ans;
}
let user = [
    { firstName: "niranjan", secondName: "nadiger", age: 19 },
    { firstName: "niranjan", secondName: "nadig", age: 21 },
    { firstName: "niranjan", secondName: "M N", age: 17 },
    { firstName: "niranjn", secondName: "n", age: 12 },
];
console.log(filterUser(user));
//# sourceMappingURL=arrays2.js.map