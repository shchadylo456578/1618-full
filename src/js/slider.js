var btn_prev = document.getElementById('prev');
var btn_next = document.getElementById('next');
var images = document.getElementsByClassName('image-slide');
var i = 0;

btn_prev.addEventListener('click', function() {
  images[i].classList.remove("active");
  i--;
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].classList.add('active');
});

btn_next.addEventListener('click', function() {
  images[i].classList.remove("active");
  i++;
  //console.log(i);
  if(i >= images.length) {
    i = 0;
  }
  images[i].classList.add('active');
});


// function myFunction() {
//   var x = document.getElementById('myDIV');
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }
