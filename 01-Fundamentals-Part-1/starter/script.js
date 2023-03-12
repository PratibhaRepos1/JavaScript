// 7 Primitive data types in javascript
let js = 'amazing';
if (js === 'amazing') alert('Java script is fun and more!');
console.log(40 + 8 + 23 - 10);
//10. Values and Variables
let firstName = 'Bob';
console.log(firstName);

//constant
let PI = 3.1415;

//variables more example
let myFirstJob = "Programmer";
let myCurrentJob = "IT service";

//1. Number 2. String 
//3. Boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//typeof
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 24);
console.log(typeof 'Bangkok');

//undefined type
let year;
console.log(year);
console.log(typeof year);

//effect of dynamic typing
year = 2022;
console.log(year);
console.log(typeof year);

//lession 13. let, var and const

//var - global and function scoped

var num = 10;
function f() {
    console.log(num);
}
f();
console.log('num is ' + num);

//let 
let a = 9;
if (true) {
    let a = 10;
    console.log(a);
}
console.log(a);


