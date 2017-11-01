


$(document).ready(function(){
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    stagePadding: '50',
    touchDrag  : false,
    mouseDrag  : false,
    smartSpeed:1000,
    animateOut: 'bringOut',
    animateIn: 'bringIn',
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
    // onInitialize: createAnimations,
    ///onDragged:callback
    // onTranslate:createAnimations,

  });


  owl.on('change.owl.carousel', function(event) {

    var $currentItem = $('.owl-item').eq(event.item.index);
    var $itemToShow = $('.owl-item').eq(event.property.value);

    if(event.item.index < event.property.value){
      $itemToShow.addClass('animated owl-animated-in fadeNext');
    }
    
    if(event.item.index > event.property.value){
      $currentItem.addClass('animated owl-animated-in fadePrev');
      $($itemToShow).css({left:'0'});
    }
    
    
  });
  
  owl.on('translated.owl.carousel', function(event) {
    
    $('.owl-item').removeClass('animated fadePrev fadeNext bringOut bringIn owl-animated-out owl-animated-in');
    $('.owl-item.active').css({left:'0'});
  });


});






