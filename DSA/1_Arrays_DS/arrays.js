const strings = ['a', 'b', 'c', 'd'];

//push - add item at the end | O(1)
strings.push('e');
console.log(strings);

// pop - remove the last item from array
strings.pop();
console.log(strings); // time complexity is O(1)

//unshift - add item at begining of array | O(n)
strings.unshift('x');
console.log(strings);


//splice - add item middle of the array 
strings.splice(2, 0, 'alien'); // O(n/2) but we use O(n)
console.log(strings)
