/*video*/
let video = document.querySelector('#video');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let stopBtn = document.getElementById('stop');
let muteBtn = document.getElementById('mute');
let progress = document.getElementById('progress');

if (video) {
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        } else {
            video.pause();
            buttonPlayMain.classList.remove('button-main-hidden');
            btnPlayPause.classList.remove('pause');
        }
    });
}

if (buttonPlayMain) {
    buttonPlayMain.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        }
    });
}

if (btnPlayPause) {
    btnPlayPause.addEventListener('click', function () {
        if (video.paused) {
            btnPlayPause.classList.remove('play');
            btnPlayPause.classList.add('pause');
            buttonPlayMain.classList.add('button-main-hidden');
            video.play();
        } else {
            btnPlayPause.classList.remove('pause');
            btnPlayPause.classList.add('play');
            buttonPlayMain.classList.remove('button-main-hidden');
            video.pause();
        }
    });
}

if (stopBtn) {
    stopBtn.addEventListener('click', function () {
        video.pause();
        video.currentTime = 0;
        buttonPlayMain.classList.remove('button-main-hidden');
        btnPlayPause.classList.remove('pause');
    });
}

if (muteBtn) {
    muteBtn.addEventListener('click', function () {
        if (video.muted == false) {
            muteBtn.classList.remove('mute-on');
            muteBtn.classList.add('mute-off');
            video.muted = true;
        } else {
            muteBtn.classList.remove('mute-off');
            muteBtn.classList.add('mute-on');
            video.muted = false;
        }
    });
}

if (video) {
    video.ontimeupdate = progressUpdate;
}

if (progress) {
    progress.onclick = videoRewind;
}

function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime);
    let d = video.duration;
    let c = video.currentTime;
    progress.value = c / d * 100;
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    this.value = o / w * 100;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
}

/*slider*/
$(document).ready(function(){
    $('.gallery__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    });
});
