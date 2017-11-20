$(document).ready(function(){
  $('.columns').masonry({
      itemSelector: '.column',
      columnWidth: '.column',
      gutter: '.column-gutter',
      percentPosition: true
  });
});
