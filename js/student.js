var Student = (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        console.log(this.name);
    };
    Student.type = "";
    return Student;
}());
