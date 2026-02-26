type User = {
    name: string,
    age: number,
    address: string
}

interface Compnay {
    name: string,
    employeeID: number,
    dept: string
}

type Union = User | Compnay
type Intersection = User & Compnay

let random: Union = { // union must have all the feild of first type and can have some or all the feilds of second type
    name: "niri",
    age: 11,
    address: "BLR",
    dept: "TEch"

}

let random2: Intersection = {   //intersection must have all the feilds of all the types or interfacex
    name: "niri",
    age: 12,
    address: "hello",
    employeeID: 1122,
    dept: "CS"
}