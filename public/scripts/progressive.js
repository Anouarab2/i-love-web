let playButton = document.querySelector('button')
let audio = document.querySelector('audio')
let isplaying = false

playButton.addEventListener('click', change)

function change(){
    audio.play();
    if(isplaying){
        isplaying = false
        audio.pause();
        playButton.classList.toggle('active', isplaying)
    }
    else{
        isplaying = true
        audio.play();
        playButton.classList.toggle('active', isplaying)
    }
}