// 1. Literal Notation 
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car);
console.log(car.make);

// 2. using the 'new Object()'

let person = new Object();
person.name = "John";
person.age = 40;

//3. access the properties
console.log(person);
console.log(person.age);

//4. modifying the object properties

car.year = "2021", //update
car.color = 'black'; //add
delete car.model; //delete

console.log(car);

//6. nested objects

//Objects can contain other objects, allowing you to build more complex structure

let student = {
    name: "Alice",
    grades: {
        math: "A",
        science: "B"
    }
};

console.log(student.grades.math);

//7. method in the object
/*
A method is function assoicated with an object. You can define as a key-value pair, where the value is a function.
*/

let calculator = {
    add: function(a,b) {
        return a + b;
    },
    substract: function(a,b) {
        return a - b;
    }
};
console.log(calculator.add(10,10), calculator.substract(50,10));

// 8. Looping through an Object
// You can use for...in loop to iterate over an object's properties.
for(key in car) {
    console.log(key, car[key]);
}

// 9. Object Methods: Object.keys(), Object.Values(), Object.Entries()

console.log(Object.keys(car)); // Output: ["make", "year", "color"]
console.log(Object.values(car)); // Output: ["Toyota", 2021, "blue"]
console.log(Object.entries(car)); // Output: [["make", "Toyota"], ["year", 2021], ["color", "blue"]]

//this keyword

let employee = {
    name: 'Michel',
    greet: function() {
        console.log("Hello: ", this.name);
    }
}
employee.greet();

// 10 spread and rest operator
const baseInfo = { make: "Toyota", year: 2020 };
const carDetails = { ...baseInfo, model: "Corolla" };

console.log(carDetails); // Output: { make: "Toyota", year: 2020, model: "Corolla" }

// use case of Object.assign()

const original = {a: 1, b: 2};
const copy = Object.assign({c: 3, c: 5}, original);

console.log(copy);
// Adding Properties to an Existing Object
const settings = { theme: "dark" };
Object.assign(settings, { language: "en", layout: "grid" });

console.log(settings); // Output: { theme: "dark", language: "en", layout: "grid" }

const cp_contract_AAL_FE = {pageChanged: {newPage: 'policyCoverage', oldPage: 'policyDetails'}};
const copy1 = Object.assign({}, cp_contract_AAL_FE);

copy1.pageChanged.oldPage = "myPolicy"; 

console.log(cp_contract_AAL_FE.pageChanged.oldPage); // myPolicy