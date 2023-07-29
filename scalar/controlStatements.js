// control statement: loop
// for loop
// while and do while
//for in loop
//for of loop

var str = "Hello world";

for(let i=0; i<=str.length; i++) {
    //console.log(str[i]);
}

var num = [2,3,4,5,6,7];

for(let i=0; i< num.length; i++) {
   // console.log(num[i] * 2);
}

//while loop : if the condition in while loop true code will run upto the condition become a false

//print 1 to 5

var i = 1;
var n = 5;

while(i<= n) {
   // console.log(i);
    i++;
}

// do while loop

// var j = 10;
// var k = 20;

// do {
//     console.log(j);
//     j++
// } while(j <= k)

// for in loop

let colors = {
    primary: 'blue',
    secondary: 'green',
    tertiary: 'white'
}

for(let color in colors) {
   
  // console.log(color + ' --> ' + colors[color]);
}

let myColors = ['blue', 'pink', 'red'];

for(let color in myColors) {
   // console.log(color + ' --> ' + myColors[color]);
}

let scores = [60, 90, 78, 89, 65];

for(let score of scores) {
    console.log(score);
}

//method - entries()

let carColors = ['blue', 'pink', 'red'];

for(let[index, colour] of carColors.entries()) {
  //  console.log(index + ' --> ' + colour);
}

//strings
var str = "Welcome";

for(let c of str) {
    console.log(c);
}

let a = 105;

if(a%5 == 0) {
    console.log("divisble 5")
} else {
    console.log('not')
}

for(let d=10; d >=10; d--) {
    console.log(d)
}

// let num1 = 2;
// let num2 = 02;

// if(num1 == num2) {
//     console.log(true)
// } else {
//     console.log(false)
// }