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

