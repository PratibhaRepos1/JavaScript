const person = {
    firstName: 'pratibha',
    lastName: 'jadhav',
    age: 2022 - 1984,
    birthYear: 1984,
    job: 'developer',
    friends: ['Savita', 'Rekha', 'Priyanka', 'Gauri'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2022 - birthYear;
    }
};

console.log(person);
console.log(person.job);
console.log(person['job']);

if(person['job']){
    console.log(`Your Job is ${person['job']}!`);

}

//add new property to object
person.location = 'Germany';
person['insta'] = 'prabs1011';

console.log(person);

//challenge 

// pratibha has 4 friends and her best friend is called 'Savita'

console.log(`${person.firstName} has ${person.friends.length} friends and her best friend is called ${person.friends[0]}`);

console.log(person.calcAge(person.birthYear));


