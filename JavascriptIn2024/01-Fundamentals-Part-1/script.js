let js = "amazing";
//if (js === "amazing") alert("javascript is FUN!");

//console.log(40 + 8 + 23 - 10);

console.log('Pratibha');
console.log(32);

//varibles
let person = 'Pratibha';
let PI = 3.1415;

//rule for variables: camel case
// ex: firstNamePerson; // most use in js
// ex: first_name_person;
//let $function = 34; //allow
//let _function = 34; // allow

let myFirstJob = 'Programmer';
let myCurrentJob = 'Manager';

console.log(myFirstJob);

// values can have dofferent types

//Data Types

true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof(true));
console.log(typeof(34));
console.log(typeof('jonas'));

//dynamic typing in action

/* javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); 

*/

// let, var and const

let age = 30;
age = 31; // reassigning the value mutate the variable

const birthYear = 1991;

//birthYear = 1993; //imutable varible, cann't not change if you created with const

// const job; // not allow

// var is a old way to define variable. 

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now -2018);

console.log(25-10-5);

let x, y;

x = y = 25 -10 -5;

console.log(x,y);

// string and template literals

const firstName1 = 'Jonas';
const job = 'teacher';
const birthYear1 = 1991;
const year = 2037;


const jonas = "I'm " + firstName1 + ', a ' + (year - birthYear1) + ' years old ' + job + '!';

console.log(jonas);

//template literal

const jonasNew = `I'm ${firstName1}, a ${(year - birthYear1)} years old ${job}!`;

console.log(jonasNew);

/* type conversion : manually convert a type
from one type to other 

 type coercion : javascript automatically converts the
 type conversion for you
*/

// type conversion

let str = "123";
let num = Number(str);

console.log(num);
console.log(typeof num);

//type Coercion

let str1 = "123";
let num1 = str * 1;

console.log(typeof num1);



