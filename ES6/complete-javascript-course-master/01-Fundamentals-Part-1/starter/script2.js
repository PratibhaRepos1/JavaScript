const firstName = 'Pratibha';
const job = 'teacher!';
const birthYear = 1984;
const year = 2023;

const pratibha = "I'm " + firstName  + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(pratibha);

const pratibhaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(pratibhaNew);

//template literals multiline 
const textme = `Hi there!
How are you!
Doing Well
`;

console.log(textme);
const age = 16;
const isOldEnough = age >= 18;
if(isOldEnough) {
    console.log(`Sarah can start driving 😊`);
} else {
    const yearLeft = 18 - age;

    console.log(`Sarah `)
}

const userbirthYear = 1999;

let century;
if (userbirthYear > 2000) {
    century = '21st'
} else {
    century = '20th'
}

console.log(century);