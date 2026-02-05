interface People {
    name: string,
    age: number,
    mail: string,
    greet: () => string,

}

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


class Manager implements People {

    constructor(public name: string, public age: number, public mail: string) {

    }

    greet() {
        return `hello ${this.name}`
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

const m = new Manager("niranjan", 23, "work")
console.log(m.name);
console.log(m.age);