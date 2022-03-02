var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(username, age, degree) {
        var _this = _super.call(this, username, age) || this;
        _this.degree = degree;
        return _this;
    }
    Student.prototype.checkFail = function () {
        if (this.degree < 60) {
            console.log("Failed");
        }
        else {
            console.log("Passed with " + this.degree);
        }
    };
    return Student;
}(Person));
var Saber = new Student("Ahmed Saber", 21, 75);
Saber.checkFail();
