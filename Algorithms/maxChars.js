/* 	4. Max Character Problem
Given string, return the character that is most commonly used in the string 
Ex. maxChar("acdbccccccdcc") ==== "c" // Function should return c
*/

function maxChars(str) {
    const Chars = {};
    let counter = 0;
    let maxChar = "";

    for(let char of str){
        if(Chars[char]) {
            Chars[char] ++;
        }
        else
        {
            Chars[char] =1
        }
    }
    //console.log(Chars);

    for(let char in Chars){
        if(Chars[char] > counter) {
            counter = Chars[char];
            maxChar = char;

            //console.log(counter + maxChar);
        }
    }
    return maxChar;

}

console.log(maxChars("abcdcccaacccc"))