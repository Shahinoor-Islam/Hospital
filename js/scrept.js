$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 109) {
      $('#menu_part').addClass('fixed');
    } else {
      $('#menu_part').removeClass('fixed');
    }

  });



});