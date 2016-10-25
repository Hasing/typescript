/// <reference path="./helloworld.ts" />
/// <reference path="./calculator.ts" />
// <reference path="./student.ts" />

import * as m from "test";

var showDOM = document.getElementById("show");
var helloworld = new HelloWorld("Tim");
helloworld.SayHi(showDOM);

var myName = 'Tim';
console.log(`hello ${myName}`);

var list: Array<Number> = [1, 2, 3];

enum Size {
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

function getDiscountPrice(price: number): number {
    if (price > 200) {
        return price * 0.8;
    }

    return price;
}


var discounter = new CouponDisCounter();
discounter.Calculate(100, "QQ");
discounter.Calculate(100);

function Hello(name: string) {
    this.name = name;
    this.say = () => {
        console.log(`Hi ${this.name}`);
    }
}

Hello("Tim");

var people: string[] = ["Tim", "Wendy"];
for (var person of people) {
    console.log(person);
}

var student = new Student("Tim");
Student.type = "QQ";
student.getName();

class Animal {
  Say(){
    console.log('I\'m Animal')
  }
}

class Dog extends Animal {
  Say(){
    super.Say();
    console.log('I\'m Dog');
  }
}

var dog = new Dog();
dog.Say();

interface IDiscountCalculator {  
  price: number;  

  qty: number;  

  Calculate(): number;
}

class TwoPieceDiscountCalculator implements IDiscountCalculator { 
    constructor(public price:number,public qty:number){

    }

    Calculate() {  
        return 100;
    }
}