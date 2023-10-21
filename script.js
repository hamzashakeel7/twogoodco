// // Enable hidden nav bar
// {
//     const nav = document.querySelector("#nav");
//     let lastScrollY = window.scrollY;
  
//     window.addEventListener("scroll", () => {
//       if (lastScrollY < window.scrollY) {
//         nav.classList.add("nav--hidden");
//       } else {
//         nav.classList.remove("nav--hidden");
//       }
//       this.scrollY >= 350 ? scrollUp.classList.add('nav--hidden')
//       : scrollUp.classList.remove('nav--hidden')

  
//       lastScrollY = window.scrollY;
//     });
//   }
  

function videoAnimation (){
    var videocon = document.querySelector('#video-container')
var playbtn =  document.querySelector('#play')

videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        opacity: 1,
        scale: 1
    })
})
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        opacity: 0,
        scale: 0
    })
})
videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left:dets.x, 
        top:dets.y-90
    })
})
}
videoAnimation();

// function loadingAnimation (){
//     gsap.from("#page1 h1", {
//         y:100,
//         opacity:0,
//         delay:0.5,
//         duration:0.9,
//         stagger:0.3
//     })
//     gsap.from("#page1 #video-container", {
//         scaleP: 0.9,
//         opacity:0,
//         delay:1.5,
//         duration:0.5,
//     })
// }
// loadingAnimation()



function page3cursor (){
    
document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelector("#child1").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#child1").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
})

document.querySelector("#child2").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#child2").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
})

document.querySelector("#child3").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#child3").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
})

document.querySelector("#child4").addEventListener("mouseenter", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(1)`
    })
})
document.querySelector("#child4").addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        transform: `translate(-50%, -50%) scale(0)`
    })
})

}
page3cursor()



// ------------scroll reveal---------------------

const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 200,
    // reset : true //animations repeat 
})


sr.reveal(`.page1__heading2, #video-container, .right`, {origin: 'right'})

sr.reveal(`.page1__heading1, .left` , {origin: 'left'})

sr.reveal(`#page2, #page3`, {interval: 100})

// sr.reveal(``, {interval: 100}) 


// -----Show scroll up-------
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


