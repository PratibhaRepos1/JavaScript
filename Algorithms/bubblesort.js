/* Bubble Sort  without code optimization */

/* function bubbleSort(arr) {
    for(var i=arr.length; i > 0; i--) {
        for(var j=0; j< i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                //swap the element
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        }
        console.log('one pass complete!');
    }
    return arr;
}
bubbleSort([37, 45,29,8]); */

/* ES 2015 Version and optimized the code */

function bubbleSort(arr) {
    var noSwaps;

    //swap the element 
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for(var i=arr.length; i > 0; i--) {
        noSwaps = true;

        for(var j=0; j< i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);  
                noSwaps = false;              
            } 
        }
        console.log('one pass complete!');
        if(noSwaps) break;
    }
    return arr;
}
//bubbleSort([37, 45,29,8]);

bubbleSort([8, 1, 3, 5, 6]);