class Person {
    name: string
    age: number

    constructor(username: string, age: number) {
        this.name = username
        this.age = age
    }

    getInfo(){
        console.log(this.name + " with " + this.age + " years old.")
    }
}

let Ahmed = new Person('Ahmed Saber', 21)
Ahmed.getInfo()