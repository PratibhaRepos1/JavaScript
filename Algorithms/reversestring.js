// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Approch #Solution 1
function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');

    //shorter way to write

    //return str.split('').reverse().join('');

    
}

//Approch #Solution 2
function reverse2(str){
    let reversed = '';

    for (let characters of str) {
        reversed = characters + reversed;
    }
    return reversed
}

//Approch #Solution 3
function reverse3(str){
    return str.split('').reduce((rev, char) => char + rev, '');
}

//Approch #Solution 4
function reverse4(str){
    //check the input

    if(!str || str.length < 2 || typeof str !== 'string')
        return 'Not Valid';
    
    const revArray = [];

    for( let i = str.length; i >= 0; i--){
        revArray.push(str[i])
    }

    return revArray.join('');
    
}


console.log(reverse('apple'));
console.log(reverse2('apple'));
console.log(reverse3('apple'));
console.log(reverse4('apple'));