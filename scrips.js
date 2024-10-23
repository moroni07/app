let botaosom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let audio = document.querySelector(".audio")

botaosom.addEventListener("click", ligasom)

function ligasom(){
    video.muted = false
}

Window.addEventListener("click", tocaraudio)

function tocaraudio(){
    audio.play()
}