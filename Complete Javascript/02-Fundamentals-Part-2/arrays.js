const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);

const year = new Array(1991, 1984, 2002, 2020);
console.log(year);
// console.log(year[0]);
// console.log(year[3]);
console.log(year.length);

const firstname = 'jonas';
const jonas = [firstname, 'Schedtmann', 2022-1990, 'Programmer', friends];
console.log(jonas);

function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1991, 1984, 2002, 2020];
const age = calcAge(years[0]);

console.log(age);

/* some array methods */
const newLength = friends.push('Bob');

console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift use for add element at 0 position of array
console.log(friends);

//remove element 
friends.pop(); // remove the last element
// friends.pop();
// friends.pop();
console.log(friends);

friends.shift(); // remove first element
console.log(friends);
friends.push(23);
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // it will return -1 if u didn't get the element

//includes
console.log(friends.includes('Steven')); // check the value is avilable in array it will return true
console.log(friends.includes('Bob')); // check the value is avilable or not in array so it will return false

if(friends.includes('Steven')) {
    console.log('You have a friend call Steven');
}