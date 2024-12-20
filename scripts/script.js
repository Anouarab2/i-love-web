//selecteer de elementen die ik wil gebruiken
const hamMenu = document.querySelector('.ham-menu');
const hamItems = document.querySelector('.ham-items');

//voeg een evenlistener toe die voor een functie zorgt bij het klikken
hamMenu.addEventListener('click', openMenu)

//benoem wat de functie moet doen
function openMenu(){
    hamMenu.classList.toggle('active')
    hamItems.classList.toggle('active')
}

// hamMenu.addEventListener('click', ()=>{
//     hamMenu.classList.toggle('active');
//     hamItems.classList.toggle('active');
// })
// hamItems.addEventListener('click', openMenu)