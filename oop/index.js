var Person = /** @class */ (function () {
    function Person(username, age) {
        this.name = username;
        this.age = age;
    }
    Person.prototype.getInfo = function () {
        console.log(this.name + " with " + this.age + " years old.");
    };
    return Person;
}());
var Ahmed = new Person('Ahmed Saber', 21);
Ahmed.getInfo();
