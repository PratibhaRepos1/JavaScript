function linearSearch(arr, val) {
        if(arr.indexOf(val)) {
            return arr.indexOf(val);
        } else {
            return -1
        }  
}
console.log(linearSearch([1,3,5,7], 5));


function linearSearch1(arr, val) {
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === val) {
            return i;
        } 
    }
    return -1;

}

console.log(linearSearch1([1,3,5,7, 9, 11], 9));
