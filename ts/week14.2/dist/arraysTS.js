"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxValue(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 5, 6, 34, 22, 9]));
//# sourceMappingURL=arraysTS.js.map