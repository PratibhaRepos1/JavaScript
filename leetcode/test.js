function scoreOfString(s) {
    let totalScore = 0;

    for (let i = 0; i < s.length - 1; i++) {
        totalScore += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }

    return totalScore;
}

// Example 1
let s1 = "hello";
console.log(scoreOfString(s1)); // Output: 13

// Example 2
let s2 = "zaz";
console.log(scoreOfString(s2)); // Output: 50