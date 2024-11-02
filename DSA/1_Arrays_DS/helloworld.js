/* write a code in javascript Write a function createHelloWorld. It should return a new function that always returns "Hello World". */

function createHelloWorld() {
    return function(...args) {
        return 'Hello World'; // ignore all the arguments and return 'Hello World';
    }

}

const f1 = createHelloWorld();
console.log(f1());

const f2 = createHelloWorld();
console.log(f2({}, null, 43))