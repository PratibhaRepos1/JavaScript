/*
Problem: Write a function called "same", which accepts two arrays. 
The function should return true if every value in the array has it's
correspondng value squared in the second array. 
The frequency of values must be the same.
*/

function same(array1, array2) {
    if(array1.length !== array2.length) {
        return false;
    }
    for(let i=0; i < array1.length; i++) {
        let correctIndex =  array2.indexOf(array1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        array2.splice(correctIndex, 1);

    }
    return true;

}

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 9];

console.log(same(arr1, arr2));