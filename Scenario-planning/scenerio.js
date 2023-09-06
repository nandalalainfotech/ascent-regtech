


$(function () {
  // Owl Carousel

  
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    autoplay: true,
    items: 5,
    margin: 10,
    loop: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0:{
        items: 1,
      },
      400:{
        items: 1
      },
      600:{
        items: 3
      },
      900:{
        items: 5
      }
  }
    

  });
  

});


