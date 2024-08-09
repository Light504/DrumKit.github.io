window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const keys = document.querySelector(`.keys[data-key='${e.keyCode}']`);

    if (!audio) return;
    audio.currentTime = 0.01;
    audio.play()
    keys.classList.add('play');
    setTimeout(function(){
        keys.classList.remove('play');
    }, 270);
});
