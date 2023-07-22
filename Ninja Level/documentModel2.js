//Changing CSS styles

const title = document.querySelector('h1');
//title.setAttribute('style', 'margin:70px;')

console.log(title.style);
console.log(title.style.color);

title.style.margin='20px';
title.style.color = 'maroon';
title.style.fontSize = '30px';

//remove css
title.style.margin = '';

//Adding and removing classes
const content = document.querySelector('p');

console.log(content.classList);

content.classList.add('success');

//content.classList.remove('success');

console.log('----------assignment----------');
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    const content = para.textContent;
    if(content.includes("success")) {
        para.classList.add('success')
    } 
    if(content.includes("error")){
        para.classList.add('error');
    }
   console.log(content);
})