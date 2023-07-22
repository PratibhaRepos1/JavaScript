// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

//creating and removing the element
//Event bubbling and (delegation)

const ul= document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
   
   // ul.innerHTML += '<li>Something new</li>';

   const li = document.createElement('li');
   li.textContent = 'something new to dos';
  // ul.append(li);
   ul.prepend(li);

});

// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in li');
//         e.stopPropagation();
//        // console.log(e.target);
//       //  console.log(item);

//      // e.target.style.textDecoration = 'line-through';
//      e.target.remove();

//     })
// });

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI') {
        e.target.remove();
        console.log(e.target);
    }
   
})

