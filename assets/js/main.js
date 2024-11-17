// loader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

//text Animation

// var typed = typed(".multiple-text", {
//     String: ["Frontend Developer","Graphic Desing","Web Development"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })


var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Graphic Desing','Web Development'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

  });



