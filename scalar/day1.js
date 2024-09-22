//console.log('Hello');

function consoleLog(val) {
    console.log(val);
    return val;
}

console.log(consoleLog('Hello'));

function objectMaker(val) {
    return {
        prop: val
    }
}

//console.log(objectMaker(30));
let counter = 3;

function example() {
    console.log(counter);
    counter = counter - 1;
    if(counter === 0) return; 

    example();

}

example();