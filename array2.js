const car = ["skoda", "bmw", "tesla"];
for(var i=0; i< car.length; i++) {
    // console.log(i);
    // console.log(car[i]);
}
//console.log(car);

const namearr = ["Pratibha", "Daksh"];
/* Converting Arrays to Strings - use toString() */
//console.log(namearr.toString());

/* The join() method also joins all array elements into a string.
    It behaves just like toString(), but in addition you can specify the separator: */

const age = [12, 6, 8, 34];

//console.log(age.join(": Age, "));

/* pop method - remove the element from array at the end */
/* Shifting is equivalent to popping, but working on the first element instead of the last.
The shift() method removes the first array element and "shifts" all other elements to a lower index
 */
const numbers = [2,7,4,7,4];

//console.log(numbers);
//let num = numbers.pop();
numbers.push(10);
//numbers.shift();
//console.log(num);

/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: */
numbers.unshift(3);
//console.log(numbers);

/* merging or concat two arrays */

const even = [2,4,6];
const otherEven = [10, 12, 14];

const allEven = even.concat(otherEven);

//console.log(allEven);
/* The splice() method adds new items to an array.

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits);
fruits.splice(1,3,"Lemon");
//console.log(fruits);

/*The slice() method creates a new array.
The slice() method does not remove any elements from the source array.

*/
const color = ['red', 'blue', 'pink', 'green'];
//console.log(color.slice(1,3));

const fruitList = ["Banana", "Orange", "Apple", "Mango"];
fruitList.sort();
//console.log(fruitList);
fruitList.reverse();
//console.log(fruitList);

/* map 
*/

const numbers1 = [1,2,3,4, 5];
const numbers2 = numbers1.map(x => x * 2);
const numbers3 = numbers2.filter(x => x > 6 );

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

// function myFunction(value, index, array) {
//   return value * 2;
// }
