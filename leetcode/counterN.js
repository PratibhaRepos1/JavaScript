function createCounter(n) {
    let count = n;
    return function() {
        return count++;
    };
   
}

function excutecalls(n, calls) {
    const counter = createCounter(n);
    const result = [];
   
        for(let i=0; i< calls.length; i++) {
           if(calls[i] === 'call') {
            result.push(counter());
           }
        }
        
        return result;

}

console.log(excutecalls(10, ["call", "call", "call"]));
 // Output: [10, 11, 12]
console.log(excutecalls(-2, ["call", "call", "call", "call", "call"])); 
// Output: [-2, -1, 0, 1, 2]
