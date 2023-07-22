// window.addEventListener('load', () => {
//     const loadingScreen = document.querySelector('.loading-screen');
//     loadingScreen.classList.add('loading-finished');
// });

document.addEventListener('click', audioPlay, {once:true})

const countDown = () => {
    const countDate = new Date('July 28, 2023 00:19:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute= second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    if (gap < 100) {
        window.location.replace("/html/gift-for-them-hiweh.html")
    }
};

setInterval(countDown, 1000);

function audioPlay() {
    const audioMusic = new Audio('images/backgrounds/music/background-music.mp3');
    audioMusic.volume = 0.5;
    audioMusic.loop = true;
    audioMusic.play();
};