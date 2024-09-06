console.log("first js");

var x = 10;
console.log("X: " + x);
var y = 20;
console.log("Y: " + y);

var z = x + y;
console.log("Z: " + z);

// alert("Hello World");

//declaring variables

//variable value can be changed: limited scope
let name = "John";

// constant value cannot be changed
const age = 30;

// var global value access
var isMarried = true;

console.log(name);
console.log(age);
console.log(isMarried);

name = "Jane";
// age=50;

if (true) {
  var value = 10;
  const isActive = true;
  console.log("Hello World " + value);
  console.log("Hello World " + isActive);
}

console.log("Hello World " + value);
// console.log("Hello World " + isActive);

// javascript is dynamic type language:
// static type concpet:

// primitive types: number, string, boolean, null, undefined
let x1 = 10;
let x2 = "hello";
let x3 = true;

let x4 = null;
let x5 = undefined;
let x6;

let course;


let value3= Number.MAX_SAFE_INTEGER+10;
console.log(value3);
console.log(typeof value3)


