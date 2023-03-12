/* 
write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. return an array that includesboth values tht sum to zero or
undefined if a pair does not exist. */

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-12,-1,0,0,1,2, 23]));