/* let firstName = 'Pratibha';
console.log(firstName) */

/* Data Types in Javascript */

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof(true));
console.log(typeof(javascriptIsFun));
// console.log(typeof(56));
// console.log(typeof('Pratibha'));

// Dynamic typing
javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));

//undefined
let year;
console.log(year);
console.log(typeof(year));

year = 2002;
console.log(year);
console.log(typeof(year));

// let var and const
let age = 30;
age = 32;

const birthYear = 1985;
//birthYear = 1990;

var job = 'teacher';
job = 'programmer';

//math operators
/*
const now = 2037;
const agePratibha = now- 1990;
const ageSarah = now - 2017;

console.log(agePratibha);
console.log(ageSarah);

const fName = 'David';
const lName = 'Robinson';

console.log(fName + ' ' + lName);
console.log(agePratibha * 2, agePratibha / 2, 2 ** 3);

// assignment operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x)

//comparision operators
console.log(agePratibha > ageSarah); // >, <. >=, <=
const isFullAge = ageSarah >= 18; */

const now = 2037;
const agePratibha = now- 1990;
const ageSarah = now - 2017;

console.log(now - 2020 > now - 2023);

//operator Precedence
let x, y;
x = y = 25-10-5;
console.log(x,y);

const averageAge = (agePratibha + ageSarah) / 2;
console.log(agePratibha, ageSarah, averageAge);

