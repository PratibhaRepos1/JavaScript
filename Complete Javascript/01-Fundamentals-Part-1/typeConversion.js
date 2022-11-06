//type conversion 
const inputYear = "1998";
console.log(Number(inputYear) + 19); // type conversion string to number

console.log(Number('test')); // output is NaN not a number
console.log(typeof NaN); // output is give us Number type

console.log(String(23), 23);

//type coercion
console.log('I am ' + 35 + ' years old');
console.log('23' - '10' - 3); // here it give result as 10 buz - operation perform
console.log('23' + '10' + 3); // here it give result 23103 buz + operator concat the string
console.log('25' * '2'); // converts the values to number and perform multiplication result is 50 
console.log('25' / '5'); // converts the values to number and perform multiplication result is 50

let n = '1' + 1;
n = n - 1;
console.log(n); //10