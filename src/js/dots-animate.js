$(document).ready(function(){

  function freshDot(container){
    this.obj = document.createElement("div");
    this.obj.classList.add("box");

    this.obj.style.top = (container.height() * Math.random()) + 'px';
    this.obj.style.left = (container.width() * Math.random()) + 'px';

    container.append(this.obj);
  }

  var controller = new ScrollMagic.Controller();
//   var arrow = new TimelineMax;


//   var arrowStartHeight = ($('.header-text').height() - 40) +'px';
//   var arrowEndHeight = ($(window).height()-$('#dotsAnimate').height())+'px';
//   var arrowBlackEnd = $('.footer').position().top+'px';



//   arrow
//     .from('.logo-animate', 0, {height:arrowStartHeight})
//     .to('.logo-animate', 1, {height:arrowEndHeight},0)
//     ;

//   var logoPinScene = new ScrollMagic.Scene({
//     triggerHook:0,
//     offset:'20%'
//   })
//   .setTween(arrow)
//   .setPin('.logo-pos',{pushFollowers:false})
//   .addTo(controller)
//   .addIndicators();

//   var logofooterScene = new ScrollMagic.Scene({
//     triggerElement:'.footer',
//     offset:'172'

//     // duration:'20%'
//   })
//   .setPin('#logofooter',{pushFollowers:false})
//   .addTo(controller)
//   .addIndicators();


  var menu_bottom_line_show = $('.footer').position().top - $(window).height();
  var navbartitle = new ScrollMagic.Scene({
    triggerHook:0,

    offset:'20%',
    duration:menu_bottom_line_show
  })
  .setClassToggle('.navbar','fade-out')
  .addTo(controller)
  .addIndicators()
  .on('progress',function(event){


    if($('.navbar').hasClass('fade-out') && event.scrollDirection == 'REVERSE'){
      $('.navbar').toggleClass('fade-out');
    }else if(!$('.navbar').hasClass('fade-out') && event.scrollDirection == 'FORWARD'){
      $('.navbar').toggleClass('fade-out');
    }

    // console.log(event.scrollDirection);
  });

      /*
     *
     *  Menu button
     *
     *
     */

    $('#navbartitle').click(function(e){

      // BEGIN munu fde-in to main word and + navbar animate opacity show
      var menuword = [('<a href="index.html">Головна</a>')];

      $("#navbartitle").fadeIn(function () {
        $(this).html(menuword[count % menuword.length]);
      });

      $('#navbar').css({opacity: 1}) .css('pointer-events', 'auto');
      // AND munu fde-in to main word and + navbar animate opacity show


      // BEGIN dots-show onclick
      var dotsOpacity = $('#dotsAnimate').css("opacity");
      if(dotsOpacity < 1) {
        $('#dotsAnimate').css({opacity: 1})
      }
      });
    // AND dots-show onclick


    //BEGIN sckrollTOP button animate
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
      var topPos = $(this).scrollTop();

      if (topPos > 800) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    });

    $(scrollTop).click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    //AND sckrollTOP button animate





  window.addEventListener("resize", function(){init();});
  init();

  function init(){
    menu_bottom_line_show = $('.footer').position().top - $(window).height();
    navbartitle.duration(menu_bottom_line_show);

    // console.log('dur!!',navbartitle.duration());

    $('.footer .logo-animate').height($('.footer .footer-logo-down').position().top + $('.footer .logo-animate').width());

    var dot = [];

    var container = $('#dotsAnimate');

    container.text('');

    for(var i = 0 ; i < 9 ; i++ ){
      dot.push(new freshDot(container));
    }
  }
});
