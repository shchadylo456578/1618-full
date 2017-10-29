$(document).ready(function(){

  function freshDot(container){
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    // var container = $('#dotsAnimate');

    this.obj.style.top = (container.height() * Math.random()) + 'px';
    this.obj.style.left = (container.width() * Math.random()) + 'px';

    container.append(this.obj);
  }

  var controller = new ScrollMagic.Controller();


  var arrow = new TimelineMax;
  // pageYOffset

  // header-text
  
  var arrowStartHeight = ($('.header-text').height() - 40) +'px';
  var arrowEndHeight = ($(window).height()-$('#dotsAnimate').height())+'px';
  var arrowBlackEnd = $('.footer').position().top+'px';

  // var arrowEndHeight = $(window).height()+'px';
  
  // $('#logo .logo-animate').height(arrowStartHeight);

  arrow
    .from('.logo-animate', 0, {height:arrowStartHeight})
    .to('.logo-animate', 1, {height:arrowEndHeight},0)
    ;

  var logoPinScene = new ScrollMagic.Scene({
    // triggerElement:'#logo',
    triggerHook:0,
    offset:'20%',
    // duration:arrowBlackEnd
  })
  .setTween(arrow)
  .setPin('#logo',{pushFollowers:false})
  // .setClassToggle('#logo','fixed')
  .addTo(controller) 
  .addIndicators()  
  // .on('update',function(event){
  //   console.log(event);
  // })
  ;
  // 130px
  // logofooter

  // var logofooter = new TimelineMax;
  // logofooter
    // .from('.logo-animate', 1, {backgroundColor:'white'})
    // .to('.logo-animate', 1, {backgroundColor:'white'},0)
    // ;
  // backgroundColor:"#FF0000", ease:Power2.easeOut}
  var logofooterScene = new ScrollMagic.Scene({
    triggerElement:'.footer',
    // triggerHook:130,
    offset:'172',

    duration:'20%'
  })
  // .setTween(logofooter)
  .setPin('#logofooter',{pushFollowers:false})
  // .setClassToggle('#logo','fixed')
  .addTo(controller) 
  .addIndicators()  
  // .on('update',function(event){
  //   console.log(event);
  // })
  ;


  var menu_bottom_line_show = $('.footer').position().top - $(window).height();
  //  - $(window).height()/4;
  var navbartitle = new ScrollMagic.Scene({
    triggerHook:0,
    // triggerElement:'.header',
    // triggerPosition:0,
    // reverse:false,
    offset:'20%',
    duration:menu_bottom_line_show
  })
  // .setPin('.header', {pushFollowers: false})
  .setClassToggle('.navbar','fade-out')
  .addTo(controller)
  .addIndicators()
  .on('progress',function(event){


    if($('.navbar').hasClass('fade-out') && event.scrollDirection == 'REVERSE'){
      $('.navbar').toggleClass('fade-out');
    }else if(!$('.navbar').hasClass('fade-out') && event.scrollDirection == 'FORWARD'){
      $('.navbar').toggleClass('fade-out');
    }

    console.log(event.scrollDirection);
  });

      /*
     *
     *  Menu button
     *
     *
     */

    $('#navbartitle').click(function(e){
      $('#navbar').show(500);
      $('#navbartitle').hide(500);

      var dotsOpacity = $('#dotsAnimate').css("opacity");

      console.log(dotsOpacity);

      if(dotsOpacity < 1) {
        $('#dotsAnimate').css({opacity: 1})
      }


  });

  /**
   *
   *
   *
   * chenge color menu* */
  $('.navigation').click(function () {
    if ($(this).hasClass('changeColorText')) {
      $(this).removeClass('changeColorText');
    } else {
      $('.navigation').removeClass('changeColorText');
      $(this).addClass('changeColorText');
  
    }
  });

  // .on('update', e => {
    // /
  // });

  // $(window).scroll(function(event){
    // console.log(controller.info("scrollDirection"))
  // });

  // controller.on('update',function(){
    // console.log('aaa');
  // })


  // "change update progress
  // start end enter leave", callback);
 // enter, start, progress - scrolling down
 // progress, start, leave - scrolling up


  window.addEventListener("resize", function(){
  
      init();

  });

  init();


  function init(){
    menu_bottom_line_show = $('.footer').position().top - $(window).height();
    //  - $(window).height()/4;
    navbartitle.duration(menu_bottom_line_show);
    
    console.log('dur!!',navbartitle.duration());

    var dot = [];

    var container = $('#dotsAnimate');
    container.text('');

    for(var i = 0 ; i < 9 ; i++ ){
      dot.push(new freshDot(container));
    }
  }




  /*
  $(window).resize(function(){
    for(i=0;i<200;i++){
      document.body.removeChild(dot[i]);
    }
  });
  */
});
