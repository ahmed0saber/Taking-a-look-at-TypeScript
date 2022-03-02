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


class Student extends Person{
    degree: number

    constructor(username: string, age: number, degree: number){
        super(username, age)
        this.degree = degree
    }

    checkFail(){
        if(this.degree<60){
            console.log("Failed")
        }else{
            console.log("Passed with " + this.degree)
        }
    }
}

let Saber = new Student("Ahmed Saber", 21, 75)
Saber.checkFail()