// Menu animation


var menuButtonElem = document.getElementById('menu-button');
var navigationElem = document.getElementById('navbar');

menuButtonElem.onclick = function () {
  navigationElem.classList.toggle('navigation--active');
  navigationElem.classList.toggle('navigation--deactive');
};

window.onload = function () {
  if (window.innerWidth < 1050) {
    navigationElem.classList.toggle('navigation--deactive');
  } else {
    navigationElem.classList.toggle('navigation--active');
  }
};


// Page scrolling


$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    var target;
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
    ) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) {
            return false;
          }
          $target.attr('tabindex', '-1');
          $target.focus();
        });
      }
    }
  });


// navigation mark


$(document).ready(function () {
  var $sections = $('.article');

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    var $currentSection;

    $sections.each(function () {
      var divPosition = $(this).offset().top;
      var id;

      if (divPosition - 1 < currentScroll) {
        $currentSection = $(this);

        id = $currentSection.children('[id]').attr('id');
        $('a').removeClass('nav-link--current');
        $('a[href="#' + id + '"]').addClass('nav-link--current');
      }
    });
  });
});
