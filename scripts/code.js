// Menu animation


var menuButtonElem = document.getElementById('menu-button');
var navigationElem = document.getElementById('navbar');

menuButtonElem.onclick = function() {
  navigationElem.classList.toggle('navigation--active');
  navigationElem.classList.toggle('navigation--deactive');
};

window.onload = function() {
  if (window.innerWidth < 1050) {
    navigationElem.classList.toggle('navigation--deactive');
  } else {
    navigationElem.classList.toggle('navigation--active');
  }
}


// Page scrolling


$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          }
        });
      }
    }
  });
