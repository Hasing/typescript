/// <reference path="./helloworld.ts" />
/// <reference path="./calculator.ts" />
// <reference path="./student.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var showDOM = document.getElementById("show");
var helloworld = new HelloWorld("Tim");
helloworld.SayHi(showDOM);
var myName = 'Tim';
console.log("hello " + myName);
var list = [1, 2, 3];
var Size;
(function (Size) {
    Size[Size["Large"] = 0] = "Large";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Small"] = 2] = "Small";
})(Size || (Size = {}));
var count = 100;
for (var i = 0; i < 10; i++) {
    var count_1 = i;
}
console.log(count);
var discountPrice = 100;
function getDiscountPrice(price) {
    if (price > 200) {
        return price * 0.8;
    }
    return price;
}
var discounter = new CouponDisCounter();
discounter.Calculate(100, "QQ");
discounter.Calculate(100);
function Hello(name) {
    var _this = this;
    this.name = name;
    this.say = function () {
        console.log("Hi " + _this.name);
    };
}
Hello("Tim");
var people = ["Tim", "Wendy"];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log(person);
}
var student = new Student("Tim");
Student.type = "QQ";
student.getName();
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.Say = function () {
        console.log('I\'m Animal');
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.Say = function () {
        _super.prototype.Say.call(this);
        console.log('I\'m Dog');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.Say();
var TwoPieceDiscountCalculator = (function () {
    function TwoPieceDiscountCalculator(price, qty) {
        this.price = price;
        this.qty = qty;
    }
    TwoPieceDiscountCalculator.prototype.Calculate = function () {
        return 100;
    };
    return TwoPieceDiscountCalculator;
}());
