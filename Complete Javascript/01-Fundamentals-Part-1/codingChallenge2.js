/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement � */

const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.95;

// const massOfMark = 95;
// const heightOfMark = 1.88;
// const massOfJohn = 85;
// const heightOfJohn = 1.76;

const BMIofMarks = massOfMark / (heightOfMark * heightOfMark);
const BMIOfJohn = massOfJohn / heightOfJohn ** 2;

//console.log(BMIofMarks, BMIOfJohn, markHigherBMI)
if(BMIofMarks > BMIOfJohn) 
{
    console.log(`Mark's BMI (${BMIofMarks}) is higher than John's (${BMIOfJohn})!`);
}
else
{
    console.log(`John's BMI (${BMIOfJohn}) is higher than Mark's (${BMIofMarks})!`);
}