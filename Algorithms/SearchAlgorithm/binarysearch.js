function binarySearch(arr,elem) {
    let start = 0;
    let end = arr.length  - 1;
    var middle = Math.floor((start + end) / 2);
    

    while(arr[middle] !== elem && start <= end) {
        //console.log(start, middle, end);
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end);
    return arr[middle] == elem ? middle : -1;

    // if(arr[middle] == elem) {
    // return middle
    // } else  {
    //     return -1;
    // }


}

console.log(binarySearch([1,4,6,8,10,14,18,20], 8));