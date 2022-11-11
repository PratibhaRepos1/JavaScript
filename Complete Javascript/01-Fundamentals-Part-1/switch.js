const day = 'Sunday';

switch(day) {
    case 'Monday':
        console.log('Plan the course structure');
        console.log('Go to the Coding Meetup');
        break;
    case 'Tuesday':
        console.log('Prepare a theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write a code examples');
        break;
    case 'Friday':
        console.log('Record a Videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a Valid Day');
    
}

// Ternary operator in JS
const age = 23;
age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink orange juice!')

const drink = age >= 18 ? 'Take a wine!' : 'Take a orange juice';

console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'Take a wine!';
}
else {
    drink2 = 'Take a orange juice';
}
console.log(drink2);

console.log(`I like to drink ${age > 18 ? 'wine!' : 'orange juice!' }`);


