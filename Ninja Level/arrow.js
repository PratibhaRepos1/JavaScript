//regular function
// const calcArea = function(radius) {
//     return 3.14 * radius * radius;
// }

//Example 1
// const calcArea = (radius) => {
//     return 3.14 * radius * radius;
// }

//more shorter way to write arrow function if one input parameter and exeute one line code only

const calcArea = radius => 3.14 * radius * radius;

const area = calcArea(2);
console.log('area is ', area);

// Example 2
const greet = () => "Hello World";

console.log(greet());

//Example 3
const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i< products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total.toFixed(2);
}

const myItems = [12, 12, 12];
const tax = 0.3;
const payBill = bill(myItems, tax);

console.log(payBill);

//call back and forEach

const people = ['Steve', 'John', 'Sarah', 'Perk'];
console.log('Calling a callback function');
// people.forEach(function(person) {
//     console.log(person);
// });

//write it using arrow function
people.forEach((index, person) => {
    console.log(index, person);
});

const ul = document.querySelector('.people');
let html = ``;

people.forEach(function(person) {
//create a html template
html += `<li style="color: pink">${person}</li>`;
});

console.log(html);
if(html) {
   ul.innerHTML = html;
}



