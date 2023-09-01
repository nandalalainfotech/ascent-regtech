$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 5,
      margin: 10,
      loop: true,
      nav: false,
      autoplay : true,
    });
  });


  function responsive(maxWidth) {
    if (maxWidth.matches) { 
      $('#content h1').addClass('title');
       $('#content p').css({'color':'green','font-size':'15px'});
      
    } else {
       $('#content h1').removeClass('title');
       $('#content p').css({'color':'grey','font-size':'20px'});
    }
  }
  
   var maxWidth = window.matchMedia("(max-width: 600px)");
   
   responsive(maxWidth);
   maxWidth.addListener(responsive);
