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