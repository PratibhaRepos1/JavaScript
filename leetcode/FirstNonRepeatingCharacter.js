// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1

function firstNonRepeatingChar(s) {
    // Step 1: Create a hash map to store character counts
    const charCount = {};
    console.log(s);

    for(let char of s) {
        //console.log(char);
        charCount[char] = (charCount[char] || 0) + 1

        //console.log(charCount[char]);
    }

    // Step 3: Find the first character with a count of 1
  for (let i = 0; i < s.length; i++) {
   
    if (charCount[s[i]] === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }
  console.log(charCount)

  // Step 4: If no non-repeating character is found, return -1
  return -1;

}

// Test cases
console.log(firstNonRepeatingChar("leetcode"));  