function demo() {
    console.log('This is a demo function')
}

demo();

//parameters and arguments

function add(a,b) {
    return a + b;
}
const sum = add(3,4)
console.log(sum);


// what is an express? - set of statement

const multi =  (c,d) => { return c * d };
console.log(multi(4,5));

//no name function

const division = function(a,b) {
    return a/b;
}

const result = division(10,2)

console.log(result)

//Hoisting

console.log(a);
welcome();

var a = 'hi';
//console.log(a);
function welcome() {
    console.log('Hello World!')
}


var addme = function(a,b) {
    console.log(a+b)
}

addme(2,3)