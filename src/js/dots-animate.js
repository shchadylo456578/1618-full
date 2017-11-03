$(document).ready(function(){

  var arrowStartHeight = ($('.header-text').height() - 38) +'px';
  var arrowEndHeight = ($(window).height()-$('#dotsAnimate').height())+'px';
  var arrowBlackEnd = $('.footer').position().top+'px';
  // var blacklineFooter = $('#logo').position().top / $(window).height();

  var triggerHookLogoBlack = $('#logo').position().top / $(window).height();
  
  var menu_bottom_line_show = $('.footer').position().top - $(window).height();
  
  var controller = new ScrollMagic.Controller();
  
  
  // var blacklineFooter = new TimelineMax;
  //     blacklineFooter
  //       .from('#svgrecid', 0, {height:arrowEndHeight,ease:Power0.easeNone})
  //       .to('#svgrecid', 1, {height:0,ease:Power0.easeNone},0)
  //       ;

  //   var logoLineScene = new ScrollMagic.Scene({
  //     triggerElement:'.footer',
  //     triggerHook:1,
  //     offset:'-38',
  //     duration:arrowEndHeight
  //   })
  //   .setTween(blacklineFooter)
  //   // .setPin('#svgrecid',{pushFollowers:false})
  //   .addTo(controller) 
  //   .addIndicators({name: "logoLineScene", colorTrigger: "green"});

  var blackline = new TimelineMax;
      blackline
        .from('#svgrecid', 0, {height:arrowStartHeight})
        .to('#svgrecid', 1, {height:arrowEndHeight},0)
        ;

  var logoPinScene = new ScrollMagic.Scene({
    triggerHook:0,
    offset:'20%',
    // duration:arrowBlackEnd
  })
  .setTween(blackline)
  // .setPin('#logo',{pushFollowers:false})
  .addTo(controller) 
  .addIndicators();

  var logofooter = new TimelineMax;
  
  logofooter
    .to('.logo-part-1', 1, { y: '-38', ease:Power0.easeNone})
    .to('#logoblack', 1, { y: '38', ease:Power0.easeNone},0)
    .to('.logo-part-2', 1, { y: '-38', ease:Power0.easeNone},0)
    .to('#logowhite', 1, {y: '0', ease:Power0.easeNone},0)
    ;

  var logofooterScene = new ScrollMagic.Scene({
    triggerElement:'.footer',
    triggerHook:triggerHookLogoBlack,
    offset:'-38',
    duration:'38'
  })
  .setTween(logofooter)
  // .setPin('#logofooter',{pushFollowers:false})
  .addTo(controller) 
  .addIndicators()  
  ;

  var navbartitle = new ScrollMagic.Scene({
    triggerHook:0,
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
  });


  function freshDot(container){
    this.obj = document.createElement("div");
    this.obj.classList.add("box");

    this.obj.style.top = (container.height() * Math.random()) + 'px';
    this.obj.style.left = (container.width() * Math.random()) + 'px';

    container.append(this.obj);
  }


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

  window.addEventListener("resize", function(){
      reinit();
  });

  $(window).scroll(function(event){
    //
    //     var st = $(this).scrollTop();
    triggerHookLogoBlack = $('#logo').position().top / $(window).height();
    logofooterScene.triggerHook(triggerHookLogoBlack);

  });
  
  function reinit(){
    

    // initAnimations();
    /*
    *
    *  Menu 
    * 
    */

    // var arrowStartHeight = ($('.header-text').height() - 38) +'px';
    // var arrowEndHeight = ($(window).height()-$('#dotsAnimate').height())+'px';
    // var arrowBlackEnd = $('.footer').position().top+'px';
    // var triggerHookLogoBlack = $('#logo').position().top / $(window).height();
    // var menu_bottom_line_show = $('.footer').position().top - $(window).height();
  
    
    arrowStartHeight = ($('.header-text').height() - 38) +'px';
    arrowEndHeight = ($(window).height()-$('#dotsAnimate').height())+'px';
    arrowBlackEnd = $('.footer').position().top+'px';
    triggerHookLogoBlack = $('#logo').position().top / $(window).height();
    
    menu_bottom_line_show = $('.footer').position().top - $(window).height();    
    
    navbartitle.duration(menu_bottom_line_show);
    // triggerHookLogoBlack = $('#logo').position().top / $(window).height();

    /*
     *
     *  Set where Arrow to pin
     * 
     * 
     */ 

    logoPinScene.setPin('#logo',{pushFollowers:false})
    logoPinScene.update();
    
    /*
     *  Footer color Logog color change
     * 
     */ 

    
    // logoLineScene
    
    logofooterScene.triggerHook(triggerHookLogoBlack);  
    // controller.updateScene(logoPinScene, true);
    
    
    /*
    *
    * DOTS
    * 
    */
    var dot = [];
    
    var container = $('#dotsAnimate');
    container.text('');
    
    for(var i = 0 ; i < 9 ; i++ ){
      dot.push(new freshDot(container));
    }

    // cb();

  }
  

  reinit();



});
