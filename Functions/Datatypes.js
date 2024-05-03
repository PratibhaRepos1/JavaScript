//Number

let num = 10.8;

console.log(num);

num = 20;

console.log(num);
let num1 = 12.8;

console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));

console.log(num1 === 12.8);

let strNum = "125.67";
console.log(Number(strNum));
console.log(parseInt(strNum));
console.log(parseFloat(strNum));

console.log(BigInt(100));

console.log(typeof(100));

//string

let str = 'abcd';

console.log(str === 'abcd');

console.log('Hello this is a \' single quote');
console.log("Hello this is a \" double quote");

console.log('This is a very ' 
      + 'long string!');

console.log('This is a very \
        long string with Hello!');

//template literals
str = 'Wolrd';
console.log(`Hello  ${str}`);

str = 'Hello Monday!';
console.log(str.charAt(0));
console.log(str.includes('M'));
console.log(str.startsWith('H'));
console.log(str.endsWith('!'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.substring(5,9));
console.log(str.slice(5,9));
console.log(str.padStart(15,'*'));
console.log(str.padEnd(15,'*'));
console.log(str.split(' '));


