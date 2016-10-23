/// <reference path="./helloworld.ts" />
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
