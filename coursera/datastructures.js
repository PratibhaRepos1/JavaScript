/* Data structure in java script 
arrays: forEach, filter, map
Objects: Maps, Sets
queues
Linked lists (singly-linked and doubly-linked)
Trees
Graphs
*/

const fruits = ['apple', 'cherry', 'kiwi', 'mango'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex)

const num = [1, 10, 20, 30, 40, 50, 60];

const num2 = num.filter(function(num) {
    return num > 20
});

console.log(num2);

const num3 = [1, 10, 20, 30, 40, 50, 60].map(function(num) {
    return num / 10
});
console.log(num3);

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);