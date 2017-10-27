$(document).ready(function(){

  function freshDot(){
    this.obj = document.createElement("div");

    this.obj.classList.add("box");

    var container = $('#dotsAnimate');


    // console.log(container.innerHeight);
    // console.log(container.innerHeight*Math.random());


    this.obj.style.top = (container.height() * Math.random()) + 'px';
    this.obj.style.left = (container.width() * Math.random()) + 'px';

    // this.size = Math.floor(0 * Math.random()) + 8;
    // this.size = 8;

    // this.obj.style.height =  this.size + 'px';
    // this.obj.style.width = this.size + 'px';

    // document.body.appendChild(this.obj);  //
    // console.log(this.obj);

    container.append(this.obj);
  }

//   freshDot();
  var dot = [];

  for(var i = 0 ; i < 9 ; i++ ){
    dot.push(new freshDot());
  }


  /*
  $(window).resize(function(){
    for(i=0;i<200;i++){
      document.body.removeChild(dot[i]);
    }
  });
  */
});
