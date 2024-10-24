function rotateLeft(d, arr) {
    let res = [];
    for(let i = d; i < arr.length; i++) {
        res.push(arr[i]);
    }
    for(let i = 0; i < d; i++) {
        res.push(arr[i]);
    }
    return res;

}

function rotateLeft1(d, arr) {
    
    return arr.slice(d).concat(arr.slice(0,d));
   
}

const result = rotateLeft1(2, [1,2,3,4,5])
console.log(result);