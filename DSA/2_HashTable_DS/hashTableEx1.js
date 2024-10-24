/* Find the First Non-Repeating Character in a String
Input: "swiss"
Output: "w"

Input: "aabb"
Output: null
*/

function firstNonRepeatingChar(str) {
    const charCount = new Map();
    //Step 1: Store the frequency of each character
    for(let char of str) {
        //console.log(char);
        charCount.set(char, (charCount.get(char) || 0) + 1);
       
    }

    //Step 2: Find the first non-repeating character with frequency 1
    for(let char of str) {
        if(charCount.get(char) === 1) {
            console.log(char);
            return char;
        }
    }
    return null; // if all characters are repeating

}

firstNonRepeatingChar("swiss"); // w
firstNonRepeatingChar("aabb"); // null
