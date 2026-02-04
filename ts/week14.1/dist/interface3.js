"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "niranjan",
    age: 23,
    mail: "niranjan@work.com",
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
//# sourceMappingURL=interface3.js.map