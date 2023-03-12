
 /* Write a function which takes a string and return counts of each characters in the string */
// code refactor did it in following way//

 function charCount(str) {
    var result = {};
    for(var i=0; i< str.length; i++) {
        var char = str[i].toLowerCase();
       //if(/[a-z0-9]/.test(char)) { use here regular expression 
        if(isAlphaNumeric(char)) {
            result[char] = ++ result[char] || 1;
        }
    }
    return result;
    
  }

  function isAlphaNumeric(char) {
      var code = char.charCodeAt(0);

      if(!(code > 47 && code <58) && //numeric 0 to 9
      !(code > 64 && code < 91) &&   // uppercase
      !(code > 96 && code < 123)) {//lowercase
            return false;
      }
      else {
            return true;
      }
  }
 console.log(charCount('Hello'));
 console.log(charCount('Hi @@There'));
 console.log(charCount('You PIN number is 1234!'));

/* Old Code before I refactor it
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
  console.log(charCount('You PIN number is 1234!')); */
