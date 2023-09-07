const mQuery = window.matchMedia('(max-width: 1200px)');

function platform1() {

  if (document.getElementById('platform').innerText == 'Platform' && mQuery.matches) {
    setPlatform();
    document.getElementById('capabilities').removeAttribute('onclick');
  }
  else if (document.getElementById('platform').innerText == 'Back') {
    document.getElementById('platform').innerText = 'Platform';
    document.getElementById('capabilities').innerText = 'Capabilities';
    document.getElementById('whoweserve').innerText = 'Who we serve';
    document.getElementById('resources').innerText = 'Resoursces';
    document.getElementById('company').innerText = 'Company';
    document.getElementById('sign_in').innerText = 'Sign In';
    document.getElementById('contact-us').innerText = ' Contact Us';
  }
}

function capabilities1() {
  if(mQuery.matches)
  setCapabilities();
}
function setPlatform() {
  document.getElementById('platform').innerText = 'Back';
  document.getElementById('capabilities').innerText = 'Our Approach';
  document.getElementById('whoweserve').innerText = 'Our Data';
  document.getElementById('resources').innerText = 'Regulators';
  document.getElementById('company').innerText = 'Technology Partners';
  document.getElementById('sign_in').innerText = '';
  document.getElementById('contact-us').innerText = '';
}

function setCapabilities() {
  document.getElementById('platform').innerText = 'Back';
  document.getElementById('capabilities').innerText = 'Obligations Inventory';
  document.getElementById('whoweserve').innerText = 'Scenario Planning';
  document.getElementById('resources').innerText = 'Horizon Scanning';
  document.getElementById('company').innerText = 'Audit Trail';
  document.getElementById('sign_in').innerText = '';
  document.getElementById('contact-us').innerText = '';
}
let first = 
function linkSetter() {
  if (first == 'Our Approach') {
    document.getElementById('capabilities').setAttribute('href', '../OurApproach/OurApproach.html');
  }
  console.log("called");
}



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
      0: {
        items: 1,
      },
      400: {
        items: 1
      },
      600: {
        items: 3
      },
      900: {
        items: 5
      }
    }


  });


});


