/* 
1. Score of a string
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

*/

function scoreOfString(s) {
    //Initialize the result variable to store the total score
    let result = 0;

    for(let i=0; i < s.length -1; i++) {
        //calculate the abosulte difference between the ASCII values of adjucent 
        // characters and add it to the result
        result += (Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1)));
        console.log(`result: ${result}`);
    }

    return result;
    
}

let outputVal = scoreOfString('hello');

console.log(outputVal);