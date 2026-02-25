// unions in types 

type Kid = {

    name: string,
    age: number,
    height: number
}

type Address = {
    fatherName: string,
    motherName: string,
    address: string,
    siblings?: number
}

type School = Kid | Address         // | --> this is an union operator 

//union says  - The value must satisfy at least one of the types or interfaces - both the properties if you union two types or interfaces

let newKid: School = { // so this intersections let you take the properties of types - only if in need , mother and father name are skipped here
    name: "niranjan",
    age: 23,
    height: 160,
    address: "benagluru",
    siblings: 0
}

//we can also say that intersection works as optional thingy - just like we had in interfaces --> name?: string