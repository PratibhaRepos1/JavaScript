// Different types of loop in JS
//1. For loop

for(let i = 0; i < 5; i++) {
    console.log('in loop', i)
}

let names = ['shaun', 'mario', 'john'];
for(let i=0; i< names.length; i++) {
    console.log(names[i]);
}

//while loop
let count = 0;
while(count < 5) {
    console.log('in while loop ', count);
    count++;
}

// Do While loop
let i = 2;
do {
    console.log('val of i is: ', i);
    i++;
} while(i<5);

//if statement
const age = 22;
if(age > 20) {
    console.log('You are over 20 years old');
}

const ninjas = ['shaun', 'John', 'chun-li', 'yoshi'];
if(ninjas.length > 3) {
    console.log("that's a alot of ninjas");
}

//if else statement and else if 
// logical operators && ||
const password = 'password1';
if(password.length >= 8 && password.length < 12) {
    console.log('that password is long enough!');
} else if (password <= 4) {
    console.log('that password is short!')
} else {
    console.log("that password doesn't match the length");
}

if(age > 20 || age == 22) {
    console.log('You are over 20 years old');
}

//logical NOT (!)
let user = false;
if(!user){
    console.log('you must logged in to continue!')
}

console.log(!true);
console.log(!false);

//Break & continue

const scores = [50, 25, 0, 30, 100, 20, 10];
for(let i= 0; i< scores.length; i++) {
    if(scores[i] === 0) {
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}

//switch statement
const grade = 'D';

switch(grade) {
    case 'A': 
        console.log('You got an A!');
        break;
    case 'B': 
        console.log('You got B!');
        break;
    case 'C': 
        console.log('You got C!');
        break;
    case 'D': 
        console.log('You got an D!');
        break;
    default: 
    console.log('not a valid grade')
}

//Variables & Block Scope
let myAge = 40;
if(true) {
    let myAge = 20;
    let name = 'shaun'
    console.log('inside 1st code block:', myAge, name);

    if(true) {
        let myAge = 50;
        console.log('inside 2nd code block:', myAge)
    }
} 
console.log('outide code block:', myAge, name)