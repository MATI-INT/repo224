$(document).ready(function() {
  $('.accordion').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).closest('.accordion').find('p').slideToggle(1000);
  });
});