
 /* Write a function which takes a string and return counts of each characters in the string */

 function charCount(str) {
    var result = {};
    for(var i=0; i< str.length; i++) {
        var char = str[i].toLowerCase();
       
        if(result[char] > 0){
            result[char] ++;
        }
        else {
            result[char] = 1;
        }
        
    }
    return result;
    
  }
  console.log(charCount('Hello'));
  console.log(charCount('Hi @@There'));
  console.log(charCount('You PIN number is 1234!'));
