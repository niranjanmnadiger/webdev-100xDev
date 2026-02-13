//union of types 

type Employee = {
    name: string,
    age: number,
    startDate: string
}

type Manager = {

    name: string,
    department: string,
    workExp?: number        // workExp is optional here - which can be done by adding ? mark
}

type TeamLead = Employee & Manager;

let e: Employee = {
    name: "niranjan",
    age: 23,
    startDate: "11/11/2025"
}

let m: Manager = {
    name: "nirus",
    department: "IT",
    workExp: 10
}

let t: TeamLead = {     //union makes sure u have all the properties of the both the types or even interfaces if they are in use
    name: " niranjan",
    age: 23,
    startDate: "11/11/2025",
    department: "dev",
    //workExp: 2     so here even if i comment out the workExp - it wont show the error or warnings

}