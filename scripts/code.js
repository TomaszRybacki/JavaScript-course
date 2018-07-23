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
