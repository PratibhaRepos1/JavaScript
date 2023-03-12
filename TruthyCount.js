//Falsy values in javascript
//undefined
//null
//''
//false
//0
//NaN

//Count the truthy values from given array

const array = [1,2,undefined, '', NaN, 'test'];

console.log(countTruthy(array));

function countTruthy(array)
{
    let count = 0;
    for(i in array)
    {
        if(array[i])
               count++
    }
    return count;
}