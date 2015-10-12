$(document).ready(function() {
  $('body').on('click', '.go-to', function(e) {
    e.preventDefault();
    var $this = $(this);
    var href = $this.attr('href'); // #my_block #my_block2
    $this;
    $('html').animate({
      scrollTop: $(href).offset().top
    }, 2000, function() {
      document.location.hash = href;
    });
  });

  $('#go-to-top').click(
      function() {
        $('html, body').animate({
          scrollTop: $('#my_block').offset().top
        }, 2000);
      }
  )
});
