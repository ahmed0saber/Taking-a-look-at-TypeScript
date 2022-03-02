interface Student {
    name: string,
    age?: number, // optional
    succeeded: boolean
}
let Ahmed:Student = {
    name: "Ahmed Saber",
    age: 21,
    succeeded: true
}
console.log(Ahmed)
let Ali:Student = {
    name: "Ali 001",
    succeeded: true
}
console.log(Ali)