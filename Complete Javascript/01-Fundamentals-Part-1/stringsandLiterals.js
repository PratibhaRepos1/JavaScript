/* before template literals we are writing a code like */
const firstName = "Pratibha";
const job = "Programmer";
const birthYear = 1984;
const year = 2022;

const Pratibha = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old and job is ' + job + '!';

console.log(Pratibha);

//Lets use template Literals i.e. ``

const PratibhaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(PratibhaNew);

console.log(`Just regulate a string...`);
console.log('string with \n\
multiple lines \n\
');

//using template literals its very easy

console.log(`add one more line
second line
third line`);