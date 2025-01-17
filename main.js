



let btns=document.querySelectorAll(".nav-btn")
let slides=document.querySelectorAll(".video-slide");
let contents=document.querySelectorAll(".content")

 var sliderNav=function(manual){
btns.forEach((btn)=>{
    btn.classList.remove("active")
});
slides.forEach((slide)=>{
   slide.classList.remove("active")
});

contents.forEach((content)=>{
   content.classList.remove("active")
 });
 
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
 }

 btns.forEach((btn,i)=>{
    btn.addEventListener("click",function(){
        sliderNav(i)
    })
 })
 
 var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   autoplay: {
      enabled: true,
      delay: 3000
    },
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
  
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       610: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 3,
       },
   },
 });

 function destroyTilt() {
  var tiltElements = document.querySelectorAll(`[data-tilt]`);
  var mq = window.matchMedia("(max-width: 1025px)");
  if (mq.matches) {
      for (var i = 0, len = tiltElements.length; i < len; i++) {
          tiltElements[i].vanillaTilt.destroy();
      }
  } else {
      console.log('pedal');
  }
}
destroyTilt();


let scrollToTop = document.getElementById("up");
var nav=document.querySelector(".navbar");
 
  window.onscroll = function () {
    if (scrollY >= 500) {
      scrollToTop.style.display = "flex";
      nav.classList.add('nav-active');
    
    } else {
      scrollToTop.style.display = "none";
      nav.classList.remove('nav-active');
      
    }
}
scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left:0,
    behavior: "smooth",
  });
};





let menubtn = document.querySelector(".menu-btn");
let navigation = document.querySelector(".navigation");

menubtn.addEventListener("click", function (){
  menubtn.classList.toggle("active");
  navigation.classList.toggle("active") 
})
