//factory function and return object
//closure: outer function call the inner function

function human(n) {
   const name = n;

    function sayHi() {
        console.log(`Hi I am ${name}`);
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling good!`);
    }
    return {
        sayHi,
        sayHowYouFeel
    }
    
}

const sina = human('Sina');
const qoli = human('Qoli');
console.log(sina.sayHi());
console.log(qoli.sayHi());

let lastname = null;
console.log(lastname);

//promise in js
const fetchdata = new Promise((resolve, reject) => {
    setTimeout(() => resolve("data fetched"), 1000);
});

fetchdata.then(data => console.log(data)).catch(error => console.error(error));
