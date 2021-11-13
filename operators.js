console.log('Operators in Javascript');

let x = 10;
let y = 3;

//Arthmatic Operators

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//increment
console.log(x++);
console.log(x);

//increment
console.log(y--);
console.log(y);

//assignment operators
let a = 5;

a = a + 10 //
a += 10 // line 26 and line 27 are same

// relational operators or comparison operators
let b = 1;
// console.log(b > 0);
// console.log(b = 1);
// console.log(b < 1);
// console.log(b <= 1);

//Equality operators

console.log(b === 1);
console.log(b !== 1);

//strict equality operator compare (type+value)
console.log(1 === 1)

//loose equality operator compare (value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

//if the customer has more than 100 points they are gold customer otherwise they are silver customer
let points = 10;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

//logical && operator: both the operands must true
console.log(true && true); //returns true;
console.log(false && true); //return false;
console.log(true && false); //return false;

//logical OR || operator
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible ' + eligibleForLoan);

//not operator
let applicationRefused = !eligibleForLoan;
console.log('Application Refused ', applicationRefused);

