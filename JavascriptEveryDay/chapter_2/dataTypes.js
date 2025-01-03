/* Data Types in JS */
/*

Number : 1,2,3, 100, 3.14
String : 'hello world', "test@test.com"
Boolean : true / false
Null : null Explicitly set a variables with no value
Undefined: undefined For variables that have not yet been defined
Object : complex data structures - Arrays, Dates, Liteerals etc
Symbol: used with objects

*/

console.log('hello, world');
let email = 'mario@gmail.com';

console.log(email);
//string concat
firstName = "John";
lastName = "Smith";

console.log(firstName, '', lastName);
let fullName = firstName + ' ' + lastName;
console.log(fullName[0]);
console.log(fullName.length);
let result = fullName.toUpperCase();

console.log(result);

let index = email.indexOf('@');
console.log(index);

//common String Methods
let result1 = email.lastIndexOf('o');
console.log(result1);

result1 = email.slice(1,5)
console.log(result1);

result1 = email.substring(1,5);
console.log(result1);

result1 = email.replace('m', 'n');
console.log(result1);


//Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, **, %
console.log(10/5);

let result2 = pi * radius ** 2;
console.log(result2);

//order of operations B I D M A S

let result3 = 5 * (10-3) **2;
console.log(result3);

//let likes = 10;
//likes = likes + 1;
//likes++;
//likes--;

//shorthand notations

//likes +=10;
//likes -= 5;
//likes /=2;

//console.log(likes);

//NaN Not a Number

//console.log( 4 / 'hi');

//let result4 = 'the blog has ' + likes + ' likes';
//console.log(result4);

//Template String
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way
let result5 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result5);


// template sting way or template literals
let result6 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result6);

//creating html template
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);

//array
let fruits = ['apple', 'banana', 'grapes'];
console.log(fruits[1]);
fruits[1] = 'orange';
console.log(fruits);

let ages = [20, 25, 30, 35];
console.log(ages);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);
console.log(random.length);

//array method
let result7 = fruits.join(',');
console.log(result7);

let result8 = fruits.indexOf('grapes');
console.log(result8);

let result9 = random.concat(['key', 'lock']);
console.log(result9);

fruits.push('coconut');
console.log(fruits);
fruits.pop();
console.log(fruits);

//null & undefined

let price;
console.log(price, price + 3, `the price is ${price}` );
//o/p: undefined NaN 'the price is undefined'

let price1 = null;
console.log(price1, price1 + 3, `the price is ${price1}` );
//o/p: null 3 'the price is null'

//boolean : true false
console.log(true, false);
//methods can return booleans
let emails = 'acid@yahoo.com';
let result11 = emails.includes('!');
console.log(result11);

console.log(fruits.includes('grapes'));

let coins = 34;
console.log(coins == 23);
console.log(coins == 34);
console.log(coins != 30);
console.log(coins != 34);


//type conversion
let myScore = '100';
myScore = Number(myScore);

console.log(myScore + 1);
console.log(typeof myScore);

let myText = String('50');
console.log(myText);
console.log(typeof myText);







