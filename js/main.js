// Navigation zakucation

$(window).scroll(function() {
    $('nav').toggleClass('scroll', $(this).scrollTop() > 100);
});

// Hamburger-menu

const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
});





$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
       if (value == 'all'){
           $('.itemBox').show('1000');
       }
       else{
           $('.itemBox').not('.'+value).hide('1000');
           $('.itemBox').filter('.'+value).show('1000');
       }
    });
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

});



// Carousel section Blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



// Slider Say Section

var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".next");
var prevSlide = document.querySelector(".prev");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

    if(direction=="next"){
       index++;
        if(index==totalSlides){
         index=0;
        }
    } 
    else{
            if(index==0){
             index=totalSlides-1;
            }
            else{
             index--;
            }
     }
 
   for(i=0;i<slides.length;i++){
           slides[i].classList.remove("active");
   }
   slides[index].classList.add("active");     
 
 };