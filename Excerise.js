let i =0;
while (i <=10)
{
   // if (i === 5) break;

   if(i % 2 === 0){
       i++;
       continue;
   }
	console.log(i);
	i++;
}

//Excerise 1: Write a function that takes two numbers and returns the maximum of the two.
let num1 = 10;
let num2 = 10;
let maxnumber = CalculateMax(num1, num2);

function CalculateMax(n1, n2)
{
    if(n1 > n2){
        console.log('Maximum number is '+ n1)
    }
    else
    {
        console.log('Maximum number is '+ n2)
    }
}
//Code Review/ Code optimized shorter code
let number = max(12,45);
//console.log(number);
function max(a,b)
{
    //use conditional operator here

    return (a > b) ? a : b;

}

//Excerise 2 : Check is Landscape or portrait
//console.log(isLandscape(300,300));

function isLandscape(width, height){
    return(width > height);
}

//Excerise 3: FizzBuzz program - very popular interview question

//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 & 5 => FizzBuzz
//not Divisible by 3 or 5 => number
//Not a number => 'Not a number'

const output = FizzBuzz(7);
console.log(output);

function FizzBuzz(input){
    
    if (typeof(input) !== 'number' )
     return 'Not a number';

    if ((input % 3 === 0) && (input % 5 === 0)) 
     return 'FizzBuzz';

    if(input % 3 === 0)  
    return'Fizz';

    if(input % 5 === 0) 
    return 'Buzz';


    if ((input % 3 !== 0) || (input % 5 !== 0))  
    return input;
    
    
}