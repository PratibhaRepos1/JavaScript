
/* 
Variables and constants:
	let, var, and const
	
	let userName;  //Best practice: camelCase
	let ageGroup5 // only letters and digits
	let $kindOfSpecial; //starting with $ is allowed
	let _internalValue; //starting with _ is allowed
	
	
	Not Allowed cases:
	
	let user_name;  //allowed but bad practice
	let 21Players; //starting digits are not allowed
	let user-b; // no special characters!

*/
const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' + result);

}

add(5,10);

currentResult = (currentResult+ 10) * 3 / 2 -1;

let calDescription = `(${defaultResult} + 10) * 3 / 2 -1`;

outputResult(currentResult,calDescription);

// function greet(name) {
//     alert ('Hi ' + name);
// }

// greet('Pratibha');
