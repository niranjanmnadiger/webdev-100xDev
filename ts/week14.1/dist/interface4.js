"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
let person: People = {
    name: "niranjan",
    age: 23,
    mail: "niranjan@niri.com",
    greet: () => {
        return `hello ${person.name}`
    }
}

console.log(person.greet())
*/
class Manager {
    name;
    age;
    mail;
    constructor(name, age, mail) {
        this.name = name;
        this.age = age;
        this.mail = mail;
    }
    greet() {
        return `hello ${this.name}`;
    }
}
/*
you can also write it like this !!!

class Manager implements People {
    name: string;
    age: number;
    mail: string;

    constructor(name: string, age: number, mail: string) {
        this.name = name;
        this.age = age;
        this.mail = mail;

    }

    greet() {
        return `hello ${this.name}`
    }
}
*/
const m = new Manager("niranjan", 23, "work");
console.log(m.name);
console.log(m.age);
//# sourceMappingURL=interface4.js.map