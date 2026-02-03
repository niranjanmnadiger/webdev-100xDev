"use strict";
// types let you do the unions and intersections, which are quite hard in interfaces
// but types and interfaces, you can use both to get the maximum efficency out of the code
Object.defineProperty(exports, "__esModule", { value: true });
let t = {
    names: "niranjan",
    age: 23,
    workid: "niranjan@work.com"
};
function company(worker) {
    console.log(`your name is ${worker.names}`);
    console.log(`your name is ${worker.age}`);
    console.log(`your name is ${worker.workid}`);
}
company(t);
//# sourceMappingURL=types.js.map