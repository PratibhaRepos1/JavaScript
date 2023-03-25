/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const massOfMarks = 78;
// const heightOfMarks = 1.69;
// const massOfJohn = 92;
// const heightOfJohn = 1.95;

const massOfMarks = 95;
const heightOfMarks = 1.88;
const massOfJohn = 85;
const heightOfJohn = 1.76;

const bmiOfMarks = massOfMarks / heightOfMarks ** 2;
const bmiOfJohn = massOfJohn / heightOfJohn ** 2;

const markHigherBMI = bmiOfMarks > bmiOfJohn;

console.log(bmiOfMarks, bmiOfJohn, markHigherBMI);

if(markHigherBMI) {
    console.log(`Mark's BMI (${bmiOfMarks}) is a higher than John's (${bmiOfJohn})`);
} else {
    console.log(`John's BMI (${bmiOfJohn}) is a higher than Mark's (${bmiOfMarks})`);
}

//Type conversion
const inputYear = '1998'
console.log(Number(inputYear) + 18);
console.log(typeof NaN);

console.log(String(23), 23);

// javascript converts only two to three types

// Type Coercion - happend behind the scene
console.log('I am ' + 23 + ' years old.') // 23 is a number but JS still take as string buz of type coercion
console.log('23' - '10' - 3)
console.log('23' + '10' + 3) // 3 convert to string
console.log(23 * 2);

let n = '1' + 1;
n = n - 1; // - operator converts automatically convert string to Number
console.log(n);

//Truthy and Falsy
// 5 falsy values: 0, '', undifined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));
console.log(Boolean('Hi'));

const money = 100;
if(money) {
    console.log('Dont spend it all;')
} else {
    console.log('You should get it a job!')
}

let height = 0
if(height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is undefined')
}

// Equality and strict equality
let yourAge = 18;
if (yourAge === 18) console.log('You just become an adult 😊')

//Boolean Logic
// AND OR & NOT operators

// switch case
const color = 'green';
switch(color) {
    case 'red':
        console.log('You lost SORRY!');
        break;
    case 'green':
        console.log('You are Win ✌');
        break;
    default: 
        console.log('You choose not to play');


}

const currentYear = 2024;
//Ternary conditions
currentYear > 2023 ? console.log('You are in future year'): 
console.log('You are behind the current year.')
