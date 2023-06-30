const flying = document.getElementById("flying");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  sun.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
}
// const sun = document.getElementById("sun")
        
// document.addEventListener("mousemove", function (event) {
//     sun.style.top = `${event.clientY}px`
//     sun.style.left = `${event.clientX}px`

//   }, { duration: 1000, fill: "forwards" });

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