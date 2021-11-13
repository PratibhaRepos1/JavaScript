//const arr = [1,2,3,4,5];
// const arr = [7, 69, 2, 221, 8974];

// let max = 0;
// let min = 0;
// //minSum
// for (let i = 0; i < arr.length -1; i++) {
   
//          min = min + arr[i];
// }
// for (let i = 0; i < arr.length; i++) {
    
//    if(i > 0){
//      max = max + arr[i];
//    }
// }
// console.log(min + ' ' + max);
//************another solution */

function miniMaxSum(arr) {

    let minValue = 0, maxValue = 0, minIndex = 0, maxIndex = 0, minSum = 0, maxSum = 0;
    minValue = Math.min(...arr);
    maxValue = Math.max(...arr);
    minIndex = arr.indexOf(minValue);
    maxIndex = arr.indexOf(maxValue);
    
    for (let i = 0; i < arr.length; i++){
        if (minIndex != i) {
            maxSum += arr[i];
        }
        if (maxIndex != i) {
            minSum += arr[i];
        }
    }
       console.log(minSum, maxSum);
     }
     //miniMaxSum([1,2,3,4,5]);
     miniMaxSum([7,69,2,221,8974]);