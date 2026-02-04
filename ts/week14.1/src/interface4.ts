interface People {
    name: string,
    age: number,
    mail: string,
    greet: () => string,

}

let person: People = {
    name: "niranjan",
    age: 23,
    mail: "niranjan@niri.com",
    greet: () => {
        return `hello ${person.name}`
    }
}

console.log(person.greet())