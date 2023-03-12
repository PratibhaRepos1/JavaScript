function CountDown(num) {
    if(num <= 0) {
        console.log('All Done!');
        return;
    }
    console.log(num);
    num--;
    CountDown(num);
}

console.log(CountDown(3));

/* Example 2 */

function sumRange(num) {
    if(num === 1) return 1;
    return (num + sumRange(num -1));
}
console.log(sumRange(3));

/* factorial if num is 4 then 4 * 3 * 2 * 1  answser  is 24 */

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));

/* write a function caled power which accepts a base and an exponent. The function should return a power of the base to exponent. 
This function should iic the functionaity Math.pow() 
do not worry about negative basses and exponents
power(2,0)  -> 1 
power(2,2) -> 4
power(2,4) -> 16
*/ 

function power(base,exponent)
{
    if(exponent === 0) return 1;

    return base * power(base, exponent-1) 
}

console.log(power(2,4));