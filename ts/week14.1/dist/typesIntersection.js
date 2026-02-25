"use strict";
//intersections of types 
Object.defineProperty(exports, "__esModule", { value: true });
//this basically means - you sholud have everything - both the properties if you intersect two types or interfaces
let e = {
    name: "niranjan",
    age: 23,
    startDate: "11/11/2025"
};
let m = {
    name: "nirus",
    department: "IT",
    workExp: 10
};
let t = {
    name: " niranjan",
    age: 23,
    startDate: "11/11/2025",
    department: "dev",
    //workExp: 2     so here even if i comment out the workExp - it wont show the error or warnings
};
//# sourceMappingURL=typesIntersection.js.map