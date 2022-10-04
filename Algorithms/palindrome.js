// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Approch #Solution 1
function palindrome(str) {
    const revStr = str.split('').reverse().join('');
    return revStr === str ? true : false;
   // console.log(revStr);


}

//Approch #Solution 2 using every The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function palindrome2(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });

}

//Approch #Solution 3 // program to check if the string is palindrome or not
function palindrome3(str) {
    // find the length of a string
    const len = str.length;
    // loop through half of the string
    for(let i=0; i< len / 2; i++){
        // check if first and last string are same
        if(str[i] === str[len - i - 1]) {
            return true;
        }
    }
    return false;

}

// console.log(palindrome('abba'));
// console.log(palindrome('abcdefg'));

console.log(palindrome3('Fish'));