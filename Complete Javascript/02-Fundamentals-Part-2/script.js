'use strict';
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive.');

//const interface = "Audio"; // Uncaught SyntaxError: Unexpected strict mode reserved word buz of we are added line of use strict


function logger () {
    console.log('This is useful function for log the errors');
}

//calling / running / invoking function

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

console.log(fruitProcessor(5, 1));

const appleOrrangeJuice = fruitProcessor(4,2);
console.log(appleOrrangeJuice);

//function Declarations Vs. Expressions

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

//expressions
//console.log(calAge2(1991)); // Uncaught ReferenceError: Cannot access 'calAge2' before initialization

//expressions or anonymous function
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calAge2(1991));

//Arrow function

const calAge3 = birthYear => 2037 - birthYear;
//console.log(calAge3(2002));
const age3 = calAge3(2002);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    //return retirment;

    return `${firstname} retires in ${retirment} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1981, 'Bob'));
