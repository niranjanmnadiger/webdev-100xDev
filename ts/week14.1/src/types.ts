// types let you do the unions and intersections, which are quite hard in interfaces
// but types and interfaces, you can use both to get the maximum efficency out of the code

interface Managers {

    names: string,
    age: number

}

interface Employee {
    names: string,
    workid: string
}

type TeamLead = Managers & Employee

let t: TeamLead = {
    names: "niranjan",
    age: 23,
    workid: "niranjan@work.com"
}

function company(worker: TeamLead) {

    console.log(`your name is ${worker.names}`)
    console.log(`your name is ${worker.age}`)
    console.log(`your name is ${worker.workid}`)

}

company(t);