// var btn_prev = document.getElementById('prev');
// var btn_next = document.getElementById('next');
// var slides = document.getElementsByClassName('image-slide');
// var i = 0;


$(document).ready(function(){
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    stagePadding: '50',
    touchDrag  : false,
    mouseDrag  : false,
    smartSpeed:1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:false,
    margin: 15,
    nav:true,
    navText:['<div id="prev">Попередній<br>проект</div>','<div id="next">Наступний<br>проект</div>'],
    responsive: {
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
    // onTranslate:createAnimations,

  });

  // $('.owlNextBtn').click(function() {
    
  //   owl.trigger('next.owl.carousel');


  // })
  // // Go to the previous item
  // $('.owlPrevBtn').click(function() {
  //     // With optional speed parameter
  //     // Parameters has to be in square bracket '[]'
  //     // owl.trigger('prev.owl.carousel', [300]);
  //     owl.trigger('prev.owl.carousel');
  // })

  owl.on('change.owl.carousel', function(event) {

    var $currentItem = $('.owl-item').eq(event.item.index);
    var $itemToShow = $('.owl-item').eq(event.property.value);
    // var $itemToShow = $('.owl-item').eq(event.item.index);
    
    if(event.item.index < event.property.value){
      $itemToShow.addClass('animated owl-animated-in fadeNext');
      // $currentItem.addClass('animated owl-animated-out');
      console.log('next');      
    }
    
    if(event.item.index > event.property.value){
      console.log('prev');
      $currentItem.addClass('animated owl-animated-in fadePrev');
    }

  });

  owl.on('translated.owl.carousel', function(event) {

    $('.owl-item').removeClass('animated fadePrev fadeNext fadeOut fadeIn owl-animated-out owl-animated-in');

  });


});


// btn_next.addEventListener('click', function() {
//   //images[i].classList.remove('active');
//   i--;
//   if(i < 0) {
//     i = images.length - 1;
//   }
//   //images[i].classList.add('active');

// });

// btn_prev.addEventListener('click', function() {

//   //images[i].classList.remove('active');
//   i++;
//   if(i >= images.length) {
//     i = 0;
//   }
//   //images[i].classList.add('active');
//   //TweenMax.fromTo(".active", 1, {scale: 1.1, boxShadow:"25px 0px 10px 20px rgba(0,0,0,0.59)", zIndex:100 }, {scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)"});

// });

// Fired after current slide has been changed
// owl.on('changed.owl.carousel', function(event) {
//   var $currentItem = $('.owl-item', owl).eq(event.item.index);
//   var $elemsToanim = $currentItem.find("[data-animation-in]");
//   setAnimation ($elemsToanim, 'in');
// })

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





