"use strict";
// in interfaces - you define everything at ones - and use it forever - same goes with types but with a slight diffrence between them!
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    names: "niranjan",
    age: 23,
    email: "niranjan@niranjan.com"
};
function greetUser(user) {
    console.log(`hello ${user.names}`);
    console.log(`your age is ${user.age}`);
    console.log(`and to contact you - ${user.email}`);
}
greetUser(user1);
//# sourceMappingURL=interface.js.map