(function(){

    var lastScrollTop = 0;

    $(window).scroll(function(event){

       var st = $(this).scrollTop();

        /*
        *
        *   MENU
        *
        */

       var menu_bottom_line_show = $('.footer').position().top - $(window).height()/4;

       if(st  > menu_bottom_line_show){

            $('#navbartitle').show();

        }else{

            if (st > lastScrollTop){
                // downscroll code
                $('#navbartitle').hide(500);
            } else {
               // upscroll code
               $('#navbartitle').show(300);
            }

        }

        /*
         *  Always hide menu list on scroll
         *
         */

        $('#navbar').hide(500);



        lastScrollTop = st;






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
    // $('.navigation').click(function () {
    //   if ($(this).hasClass('changeColorText')) {
    //     $(this).removeClass('changeColorText');
    //   } else {
    //     $('.navigation').removeClass('changeColorText');
    //     $(this).addClass('changeColorText');
    //
    //   }
    // });
})();

