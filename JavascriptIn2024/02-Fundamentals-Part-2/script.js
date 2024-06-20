/* fundamental building block of javascript is functions
- re use a piece of code
- 
*/

function logger() {
    console.log('I am in logger fun()');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const mixJuice = fruitProcessor(2,4);
console.log(mixJuice);
console.log(fruitProcessor(0,4));