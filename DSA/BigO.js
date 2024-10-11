/*
Big O notation is a mathematical concept used to describe the performance or complexity 
of the algorithm, specially in terms of time or space used, as the input size grows.
help to evalulate algorithm scales, 
allowing developer to understand the efficiency of their code
*/

// Big O notation catagories
//1. O(n) Linear Time Complexity : The execution time increases linearly with the input size.
/* Example 1 */

function sumArray(array) {
    let sum = 0;
    for(let i= 0; i< array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const inputArray = [12, 2, 3, 5, 10]
const res = sumArray(inputArray);
console.log(res);

//2. O(1) - Constant Time Complexity
/* The algorithm's execution time remains constant, no matter how large the input size is.
*/
function getFirstElement(array) {
    console.log(array[0]);
}

getFirstElement(inputArray);
