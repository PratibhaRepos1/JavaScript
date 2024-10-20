// Using Object as a Hash Map in javascript example
const hashTable = {
    name: 'Alice',
    age: 25,
    city: 'Berlin'
};
console.log(hashTable['name']);
console.log(hashTable.age);

// JavaScript Map as a Hash Table
//Map is a better than object

//adding a key value pair
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
map.set('city', 'Berlin');

//retireving a value
console.log(map.get('name'));
console.log(map.get('age'));

//Checking if the a key exists
console.log(map.has('city'));

//Deleting a key value pair
map.delete('city');

//Iterating over a map
for (let [key, value] of map) {
    console.log(key, value);
}
