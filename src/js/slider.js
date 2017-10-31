var btn_prev = document.getElementById('prev');
var btn_next = document.getElementById('next');
var slides = document.getElementsByClassName('image-slide');
var i = 0;


$(document).ready(function(){
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    stagePadding: '50',
    //smartSpeed:1500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:false,
    margin: 15,
    nav:true,
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
    },
    onInitialize: createAnimations,
    ///onDragged:callback
    onTranslate:createAnimations,

  });
});


btn_next.addEventListener('click', function() {
  //images[i].classList.remove('active');
  i--;
  if(i < 0) {
    i = images.length - 1;
  }
  //images[i].classList.add('active');

});

btn_prev.addEventListener('click', function() {

  //images[i].classList.remove('active');
  i++;
  if(i >= images.length) {
    i = 0;
  }
  //images[i].classList.add('active');
  //TweenMax.fromTo(".active", 1, {scale: 1.1, boxShadow:"25px 0px 10px 20px rgba(0,0,0,0.59)", zIndex:100 }, {scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)"});

});


function createAnimations(event) {
  
  console.log('.owl-carousel INITIALIZED',
  event.target,         // DOM element, in this example .owl-carousel
  event.type,           // Name of the event, in this example dragged
  event.namespace,      // Namespace of the event, in this example owl.carousel
  event.item.count,     // Number of items
  event.item.index,
  event.item.size
  );
  // TweenMax.fromTo('.owl-item .active', 1, {scale: 1.1, boxShadow:"25px 0px 10px 20px rgba(0,0,0,0.59)"}, {scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)" });
}

//'owl-item active'



// (function($) {
//   var btn_prev = $('#prev');
//   var btn_next = $('#next');
//   var images = $('.image-slide');
//   var i = 0;
//
//   $(btn_prev).click(function () {
//     TweenMax.fromTo(".active", 1, {scale: 1.1, boxShadow:"0px 0px 40px 20px rgba(0,0,0,0.59)", zIndex:100 }, {x: 650, scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)"});
//
//   });
//   $(btn_next).click(function () {
//     TweenMax.fromTo(".active", 1, {scale: 1.1, boxShadow:"0px 0px 40px 20px rgba(0,0,0,0.59)", zIndex:100 }, {x: 0, scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)"});
//
//   });
// })(jQuery);





