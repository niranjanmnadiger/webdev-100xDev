"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
console.log(isLegal(19));
console.log(isLegal(17));
//# sourceMappingURL=index.js.map