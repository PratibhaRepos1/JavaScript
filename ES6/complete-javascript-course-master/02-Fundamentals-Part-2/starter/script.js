//Arrow function
const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1998);
console.log(age);

const names = ['pratibha', 'daksh', 'peter'];
names.push('seeta');

console.log(names);

names.pop(); //remove last element
names.shift(); // remove first element
console.log(names);

console.log(names.indexOf('peter'));

names.unshift('Ram'); //insert the element at start

//console.log(names);
names.includes('stevan');
if(names.includes('Rama')) {
    console.log(names);
} else {
    console.log('no element found');
}

//onject methods

