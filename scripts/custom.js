
// On Scroll Sticky Header
$(window).scroll(function(){
    let sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// For Parallax effect
$(window).scroll(function(){
    if($(document).scrollTop() > 1300) {
        $('#real-life-section').addClass('parallax');
    }
    if($(document).scrollTop() < 1310) {
        $('#real-life-section').removeClass('parallax');
    }
});

// Product Slider
$('.product-slider').slick({
    dots: false,
    slidesToShow: 4,
    infinite: true,
    centerMode: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                centerMode: false,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },
    ]
});