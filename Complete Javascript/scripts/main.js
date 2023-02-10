// const myElement = document.getElementById("demo");
// myElement.style.color = "red";

const myHeading = document.querySelector("h1");
myHeading.textContent = "hello world";

myName = 'pratibha';
//console.log(myName);

//not operator
let count = 5;
console.log(!(count === 5));

if(!(count === 5)) {
    console.log('count is 5');
} else {
    console.log('count is not 5');
}

document.querySelector('html').addEventListener("click", function() {
    alert('Did you stop!');
});
