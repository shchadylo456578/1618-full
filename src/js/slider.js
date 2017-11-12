
$(document).ready(function(){


  var owl = $('.owl-carousel'),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
        items : 4,
        stagePadding: '60',
        touchDrag  : false,
        mouseDrag  : false,
        smartSpeed: 20,
        animateOut: 'bringOut',
        animateIn: 'bringIn',
        dots: false,
        loop: true,
        lazyLoad: true,
        margin: 30,
        nav:true,
        navText:['<div id="left">Попередній<br>проект</div>','<div id="right">Наступний<br>проект</div>'],
        responsive: {
            0:{
                items:1,
                stagePadding: '25',
                margin: 10
            },
            768:{
                items:1,
                stagePadding: '40',
                margin: 20

            },
            1280:{
                items:1
            },
            1920:{
                items:1
            }
        }
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






