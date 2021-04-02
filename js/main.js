

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
       if (value == 'all'){
           $('.itemBox').show(1000);
       }
       else{
           $('.itemBox').not('.'+value).hide(1000);
           $('.itemBox').filter('.'+value).show(1000);
       }
    });
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});


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