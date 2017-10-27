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
});
