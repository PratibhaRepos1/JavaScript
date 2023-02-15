const panels = document.querySelectorAll('.panel');

//console.log(panels[0]);

panels.forEach(panel => {

    panel.addEventListener('click', () => {
        removeAtiveClasses();
        panel.classList.add('active')
    })
   
});

function removeAtiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('active')
    });   
}
