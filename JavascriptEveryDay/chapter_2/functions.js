//functions in JS


/* functions.js:5 Uncaught ReferenceError: Cannot access 'speak' before initialization
 hoiested will not work for function expression 
*/
//speak();

//function expression 
const speak = function() {
    console.log('Say hi');
};

speak();
//calling functions
greet();

//function declarations
function greet() {
    console.log('Hello There!');
}

//arguments & parameters

const talk = function(name = 'shaun', time) {
    console.log(`Hey ${name}, Its a good time ${time} to talk!`)
};

talk('Riya', 'morning');

//returning values
const calcArea = function(radius) {
    let area = 3.14 * radius**2;
   // console.log(area);
    return area;
};
const area = calcArea(10);
console.log(area);

//arrow functions: cleaner and shorter way to write a function

// const calcSquare = (num) => {
//     return num * num;
// };

//one line shorter by array
const calcSquare = num => num * num;


const square = calcSquare(5);
console.log(square);

//practice
const textMe = () => 'Hey Hi there!';
console.log(textMe());

//functions Vs methods
const name = 'pratibha';

//function
const hello = () => 'Hello!';

let result = hello();
console.log(result);

//methods
let result1 = name.toUpperCase();
console.log(result1);


//forEach and callbacks

let people = ['shaun', 'charlie', 'john', 'max', 'chun-li'];
people.forEach((person,index) => {
    console.log(index, person);
});
