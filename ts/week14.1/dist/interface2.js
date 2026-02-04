"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "niranjan",
    age: 12,
    email: "niranjan@gmail.com",
    address: {
        homeNo: 11,
        street: "bengaluru street",
        city: "bengaluru",
        pincode: 560001
    }
};
let user2 = {
    name: "niranjan", //here you can see the address is not added as the address is optional in the interface
    age: 23,
    email: "niranjan@gmail.com"
};
function isLegalToVote(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegalToVote(user));
console.log(isLegalToVote(user2));
//# sourceMappingURL=interface2.js.map