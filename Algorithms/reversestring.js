// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // const arr = str.split('');
    // arr.reverse();
    // console.log(arr.join(''));
    // return arr.join('');

    //shorter way to write

    return str.split('').reverse().join('');
}

reverse('apple');