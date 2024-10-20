/* Def: In JavaScript, an Array is a built-in data structure used to store a collection of elements. Arrays can hold values of any type (numbers, strings, objects, etc.) and allow you 
to manipulate them using various built-in methods
*/    

// Create an Array in multiple ways
//1. using array literal
let fruits = ['Apple', 'Banana', 'Mango'];

//2. using new Array()
let num = new Array(3);
console.log(num)

let moreNumbers = new Array(1,2,3);
console.log(moreNumbers);

// Accessing Array Elements
console.log(fruits[0]);

// common array methods

//1. push() - adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('Orange');
console.log(fruits); 
//2. pop() - removes the last element from an array and returns that element.
fruits.pop();
console.log(fruits);
//3. shift() - removes the first element from an array and returns that element.
fruits.shift();
console.log(fruits);
//4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('Strawberry', 'Cherry');
console.log(fruits);
//5. concat() - merges two or more arrays and returns a new array.
let vegetables = ['Carrot', 'Potato'];
let fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);
//6. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
let fruitsCopy = fruits.slice(0, 2);
console.log(fruitsCopy);
//7. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 0, 'Kiwi');
console.log(fruits);
//8. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(fruits.indexOf('Banana'));
//9. lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log(fruits.lastIndexOf('Banana'));
//10. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(fruits.includes('Banana'));
//11. forEach() - executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit));
//12. map() - creates a new array populated with the results of calling a provided function on every element in the calling array.  
let fruitsLength = fruits.map(fruit => fruit.length);
console.log(fruitsLength);
//13. filter() - creates a new array with all elements that pass the test implemented by the provided function.
let fruitsWithA = fruits.filter(fruit => fruit.includes('a'));
console.log(fruitsWithA);
//14. find() - returns the first element in the array that satisfies the provided testing function.
let fruitWithA = fruits.find(fruit => fruit.includes('a'));
console.log(fruitWithA);
//15. every() - tests whether all elements in the array pass the test implemented by the provided function.
let allFruitsWithA = fruits.every(fruit => fruit.includes('a'));
console.log(allFruitsWithA);
//16. some() - tests whether at least one element in the array passes the test implemented by the provided function.    
let someFruitsWithA = fruits.some(fruit => fruit.includes('a'));    
console.log(someFruitsWithA);
//17. reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength);
//18. sort() - sorts the elements of an array in place and returns the sorted array.
fruits.sort();
console.log(fruits);
//19. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.   
fruits.reverse();
console.log(fruits);
//20. join() - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
let fruitsString = fruits.join(', ');
console.log(fruitsString);
//21. split() - splits a string into an array of substrings.
let fruitsArray = fruitsString.split(', ');
console.log(fruitsArray);
//22. isArray() - determines whether the passed value is an Array.
console.log(Array.isArray(fruits));
//23. toString() - returns a string representing the specified array and its elements.
console.log(fruits.toString());
//24. fill() - fills all the elements of an array from a start index to an end index with a static value.
fruits.fill('Pineapple', 1, 3);
console.log(fruits);
//25. copyWithin() - shallow copies part of an array to another location in the same array and returns it without modifying its length.
fruits.copyWithin(0, 2, 4);
console.log(fruits);


// Array of Objects
let students = [
    {name: 'John', age: 20},
    {name: 'Doe', age: 22},
    {name: 'Smith', age: 24}
];
console.log(students[0].name);
console.log(students[1].age);

//Array Methods for Transformation
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// reduce() method
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// multidimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[2][2]);

// Searching Algorithms in Arrays: Linear Search
// Linear search is a simple search algorithm that finds the position of a target value within an array.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
let names = ['John', 'Doe', 'Smith', 'Alice', 'Bob'];
let search = 'Alice';
const result = linearSearch(names, search);
console.log(result);



