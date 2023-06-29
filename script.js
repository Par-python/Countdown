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

