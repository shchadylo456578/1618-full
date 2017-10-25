(function(){

    var lastScrollTop = 0;
    
    $(window).scroll(function(event){
       
       var st = $(this).scrollTop();

        /*
        *
        *   MENU
        * 
        */ 

       var menu_bottom_line_show = $('.footer').position().top - $(window).height()/2;

       if(st  > menu_bottom_line_show){

            $('#navbartitle').show();
       
        }else{

            if (st > lastScrollTop){
                // downscroll code
                $('#navbartitle').hide(500);
            } else {
               // upscroll code
               $('#navbartitle').show();
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
        $('#navbar').show();
        $('#navbartitle').hide(500);
    });




})();

