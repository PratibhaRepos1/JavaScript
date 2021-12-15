//q1. Explain what a callback function is and provide a simple example
/* a callback function is a function that is pass to the another function as an 
argument and is excuted after some operation has been completed. */

function modifyArray(arr, callback){
    arr.push(100);
    callback();
}

var arr = [1,2,3,4,5,6];

modifyArray(arr, function() {
console.log('array has been modify...',arr)
});

//q.2 Given a string, reverse each word in the sentence
//For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

var string = 'Welcome to this Javascript Guide!';

var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence);

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEachWord);

function reverseBySeparator(string, separator){
    return string.split(separator).reverse().join(separator);
}

//q.3 How to check if an object is an array or not? Provide some code
//var arrayList =[{}, {name:'test'}];
var arrayList =[1,2,3];
console.log(Object.prototype.toString.call(arrayList))

if(Object.prototype.toString.call(arrayList) === '[object Array]')
    console.log('Array!');
else
    console.log('Not an array!')

//q.4 How to empty an array in JavaScript

//method 1
var myarr = ['a','b', 'c'];
//myarr = [];
//console.log(myarr);

//method 2 -- set length to 0
//if you have referenced this array from another variable, 
//then the original reference array will remain unchanged
var myarr = ['a','b', 'c'];
myreferencearr = myarr;
// myarr = []; // this will not work here as we have reference aaray as well
myarr.length = 0;
console.log(myarr);
console.log(myreferencearr);

//Method 3
var arrayList = [{is:1},'ab'];
arrayList.splice(0, arrayList.length);
console.log(arrayList);

//q.5 what is splice() method in array
/* the splice() method changes the contents of an array by removing or 
replacing existing elements and/or adding new elements in place. To access part of an array without modifying it */
const months = ['Jan', 'feb','Mar','May'];
//1 use - add element to array
months.splice(3,0,'Apr');
console.log(months);

//Q6: How would you check if a number is an integer?
function isInt(num){
    return num % 1 === 0;
}
console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false


