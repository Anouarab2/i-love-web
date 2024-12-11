const hamMenu = document.querySelector('.ham-menu');
const hamItems = document.querySelector('.ham-items');

hamMenu.addEventListener('click', openMenu)

function openMenu(){
    hamMenu.classList.toggle('active')
    hamItems.classList.toggle('active')
}

// hamMenu.addEventListener('click', ()=>{
//     hamMenu.classList.toggle('active');
//     hamItems.classList.toggle('active');
// })
// hamItems.addEventListener('click', openMenu)