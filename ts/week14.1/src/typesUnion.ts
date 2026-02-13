// intersections in types 

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

type School = Kid | Address

let newKid: School = { // so this intersections let you take the properties of types - only if in need 
    name: "niranjan",
    age: 23,
    height: 160,
    address: "benagluru",
    siblings: 0
}

//we can also say that intersection works as optional thingy - just like we had in interfaces --> name?: string