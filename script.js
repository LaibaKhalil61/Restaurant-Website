
(function ($){
    "use strict";
    // To Make the second section move

    // wow js
    new WOW().init();

    // counter up
    $('[data-toggle = "counter-up"]').counterUp({
        delay : 10,
        time : 2000
    });
    $('.datepicker').datepicker();

    // Testimonial Carasoul
    $('.testimonial-carousel').owlCarousel({
        autoPlay : true,
        smartSpeed : 1000,
        center : true,
        margin : 24,
        dots : true,
        loop : true,
        nav: false,
        responsive: {
            0 :{
                items:1
            },
            768 :{
                items:2
            },
            992 :{
                items : 3
            }
        }

    });
})(jQuery);