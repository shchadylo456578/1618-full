var btn_prev = document.getElementById('prev');
var btn_next = document.getElementById('next');
var images = document.getElementsByClassName('image-slide');
var i = 0;


btn_next.addEventListener('click', function() {
  images[i].classList.remove("active");
  i--;
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].classList.add('active');
  TweenMax.fromTo(".active", 1, {scale: 1.1, boxShadow:"25px 0px 10px 20px rgba(0,0,0,0.59)", zIndex:100 }, {x: 800, scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)" });


});

btn_prev.addEventListener('click', function() {

  images[i].classList.remove("active");
  i++;
  //console.log(i);
  if(i >= images.length) {
    i = 0;
  }
  images[i].classList.add('active');
  TweenMax.fromTo(".active", 1, {scale: 1.1, boxShadow:"25px 0px 10px 20px rgba(0,0,0,0.59)", zIndex:100 }, {x: 0, scale:1,  boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.59)"});

});


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





