// JavaScript Code Start From Here
$(function(){

    //Preloader Active
    setTimeout(function(){
        $('.preloader-wrapper').fadeToggle();

    }, 1500); 

    //Pull Btn
    $(window).scroll(function(){
        if ($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut(); 
        }
    });


    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);

    });


    // Feature Slider Active
    $('.feature-post-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });



});