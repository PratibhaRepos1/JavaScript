//interacting with Browser : Document Object Model (DOM)
//

const h1Body = document.querySelector('body > h1');
console.log(h1Body);
console.log(document.querySelector('.error'));
console.log(document.querySelector('div.error'));

const paras = document.querySelectorAll('p');
//console.log(paras);
paras.forEach(para => {
    console.log(para);
});

//other ways to query the DOM

//1: get an element by ID
const title = document.getElementById('page-title');
console.log(title);


//get element by their class name
const errors = document.getElementsByClassName('error');
console.log(errors)

//get element by their tag name

const paragraph = document.getElementsByTagName('p');
console.log(paragraph);

console.log(paragraph[1]);

//adding and changing the page content

// const para1 = document.querySelector('p');
// para1.innerHTML += ' ninjas are awesome!'; // = assign a new text and += append to existing text
//console.log(para1);

//change all paragraph
console.log('-----------------------------------------');
// const paraAll = document.querySelectorAll('p');
// paraAll.forEach(para => {
//     para.innerText = " ninjas are best!";
//     para.innerText += " new text";
//     console.log(para.innerText);

// });

const content = document.querySelector('.content');
//console.log(content.innerHTML);
content.innerHTML += '<h3>This is header 3</h3>';

const people = ['mario', 'gorge', 'steve'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

console.log('----------------getting and setting Attribute-------------------------');

//getting and setting Attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.youTube.com');
link.innerText = "Open youTube";

const msg = document.querySelector('h4');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color:green');