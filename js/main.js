// Filter
$(function($) {
    $.autofilter({
        animation:true,
        duration: 0.5,
    });
  });


//   Slick Slider
  $(document).ready(function(){
    $('.client').slick({
        autoplay:true,
        autoplaySpeed: 3000,
        dots:true,
        arrows:true,
        slidesToShow: 2
    });
  });
