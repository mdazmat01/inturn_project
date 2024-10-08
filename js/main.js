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
      slidesToShow: 1
  });
});

$(document).ready(function(){
  $('.team').slick({
      autoplay:true,
      autoplaySpeed: 3000,
      dots:true,
      arrows:true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]

  });
});
