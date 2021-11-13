 // first javascript command
 console.log('Hello World...Welcome');
 //modern best practice - declare a varible in single line
 let firstName='Pratibha';
 let lastname = 'Jadhav';
 console.log(firstName + ' ' + lastname);
 
 //constants in JS
const interestRate = 0.3;
//interestRate = 1.3;
console.log(interestRate);

let name = 'Ram'; // string literal
let age = 30; // number literal
let isApproved = false; // boolean literal
let middleName = undefined; //undefined literal
let selectedColor = null; //null literal
console.log(middleName);
console.log(selectedColor);

//objects in Javascript
let person = {
    name:'Pratibha',
    age: '30'
};

//dot notation
person.name = 'Preeti';
console.log(person);
console.log(person.name);


//bracket notation
person['age'] = 50;
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);

let selectedAge= 'age';
person[selectedAge] = 23;
console.log(person.age);

//Arrays in Javascript
let selectedMultiColor = ['red','blue'];
selectedMultiColor[2]='green';
console.log(selectedMultiColor.length);

//functions in Javascript
function greet(name, lastname){
    console.log('Hello ' + name  + ' ' + lastname);
}

// greet('John');
// greet('Mary');

greet('Mary', 'Smith');

//Types of Functions
//calculating square

function Square(number){
    return number * number
}

let number = Square(2);

console.log(number);
