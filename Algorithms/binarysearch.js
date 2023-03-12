/* This program explain how to use binary search using Iterative method and recursive method
    Created on date 10th July 2022 */

let nums = [2,7,8,9,10,13,17,19,21];


function binarySearch(array, target)
{
    let left = 0;
    let right = array.length - 1;
   
    while(left <= right){
        //find mid
        let mid = Math.floor((left + right) / 2);
        //start comparision
        
        if(target === array[mid]){
            return mid;
        }
        else if(target < array[mid])
        {
            //re assign the right buz we are ignoring the right side 
            right = mid - 1;
        }
        else
        {
            //re assign the left buz target is > than mid so we are ignoring the left side and compare in right side
            left = mid + 1;
        }
    }
    return false;


}

console.log(binarySearch(nums,7)); //target or x = 7 Ans. should be 1 or (index 1): return 1
console.log(binarySearch(nums,21)); //target or x = 15 Ans. should be -1 or (index -1): return false