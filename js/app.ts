/// <reference path="./helloworld.ts" />
var showDOM = document.getElementById("show");
var helloworld = new HelloWorld("Tim");
helloworld.SayHi(showDOM);

var myName = 'Tim';
console.log(`hello ${myName}`);

 var list:Array<Number> = [1,2,3];

 enum Size{
     Large = 0,
     Medium = 1,
     Small = 2
 }

 var count = 100;
for (var i = 0; i < 10; i++) {
    let count = i;
}

console.log(count);

const discountPrice = 100;