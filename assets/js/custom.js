
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        new Glider(document.querySelector('.testimonial_inner_content'), {
            slidesToScroll: 1,
            slidesToShow: 4.5,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },
            responsive: [
                {
                    // screens greater than >= 1024px
                    breakpoint: 375,
                    settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1,
                    }
                  },
                {
                  // screens greater than >= 775px
                  breakpoint: 775,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                  }
                }
              ]
            });



    });


}(jQuery));