const flying = document.getElementById("flying");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  sun.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 1000, fill: "forwards"});
}

// const sun = document.getElementById("sun")
        
// document.addEventListener("mousemove", function (event) {
//     sun.style.top = `${event.clientY}px`
//     sun.style.left = `${event.clientX}px`

//   }, { duration: 1000, fill: "forwards" });

document.addEventListener('click', audioPlay, {once:true})

const link = document.querySelectorAll('.hover');

link.forEach(hover => {
  hover.addEventListener('mouseenter', () => {
    document.getElementById("sun").style.backgroundImage = 
      'url(/images/backgrounds/sun/sun-hover-gif.gif)'
  });
  hover.addEventListener('mouseleave', () => {
    document.getElementById("sun").style.backgroundImage =
      'url(/images/backgrounds/sun/sun-mouse-track.png)'
  });
});

const colors = ['', 'section2', 'section3', 'section4', 'section5', 'section6']

const sections = [...document.querySelectorAll('section')]

window.addEventListener('scroll', function () {

  const scrollFromTop = window.scrollY

  for (let i = 0; sections.length > i; i++) {

    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i] 
      break
    } 

  }
})

const imageFade = document.querySelectorAll('.image');

const appearOptions = {
  threshold: 1,
  // rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver( function(entries, appearOnScroll) {
  entries.forEach( entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions)

imageFade.forEach(images => {
  appearOnScroll.observe(images);
})

function audioPlay() {
  const audioMusic = new Audio('/images/backgrounds/music/home-page-baackground-music.mp3');
  audioMusic.volume = 0.5;
  audioMusic.play();
};