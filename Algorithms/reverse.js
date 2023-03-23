const arr = [1,2,3];
let reverse = [];
//console.log(arr.length);
for(var i=arr.length-1; i >= 0; i--) {
    console.log(i);
   reverse.push(arr[i]);
}

console.log(reverse);