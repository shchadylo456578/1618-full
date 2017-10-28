$(document).ready(function(){

  function freshDot(){
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    var container = $('#dotsAnimate');

    this.obj.style.top = (container.height() * Math.random()) + 'px';
    this.obj.style.left = (container.width() * Math.random()) + 'px';

    container.append(this.obj);
  }

  var dot = [];

  for(var i = 0 ; i < 9 ; i++ ){
    dot.push(new freshDot());
  }




  var controller = new ScrollMagic.Controller();


  var arrow = new TimelineMax;
  // pageYOffset

  // header-text
  
  var arrowStartHeight = ($('.header-text').height() - 40) +'px';
  var arrowEndHeight = $(window).height()+'px';
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

    // duration:'100%'
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
  var logofooterScene = new ScrollMagic.Scene({
    triggerElement:'.footer',
    // triggerHook:130,
    offset:'172',

    duration:'20%'
  })
  // .setTween(arrow)
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
  
      menu_bottom_line_show = $('.footer').position().top - $(window).height();
      //  - $(window).height()/4;
      navbartitle.duration(menu_bottom_line_show);
      
      console.log('dur',navbartitle.duration());
  
    });





  /*
  $(window).resize(function(){
    for(i=0;i<200;i++){
      document.body.removeChild(dot[i]);
    }
  });
  */
});
