/* create a function that reverse a string: 
Hi should be iH

*/

function reverse(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not a good'
    }

    const backwards = [];
    const totalItems = str.length -1;

    for(i = totalItems; i>= 0; i--) {
       backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('')
}
const result = reverse('Test');
console.log(result);

// 2. other way
function reverse2(str) {
    return str.split('').reverse().join('')
}
const result2 = reverse2('Pratibha');
console.log(result2);

//3. other way modern es6 ways
const reverse3 = str => str.split('').reverse().join('');

console.log(reverse3('Me'));