var elemPolzunov = document.querySelector('#people-polzunov');
var showElemPolzunov = document.querySelector('#polzunov');

var elemDemidov = document.querySelector('#people-demidov');
var showElemDemidov = document.querySelector('#demidov');

var elemLisavenko = document.querySelector('#people-lisavenko');
var showElemLisavenko = document.querySelector('#lisavenko');

var elemGebler = document.querySelector('#people-gebler');
var showElemGebler = document.querySelector('#gebler');

var elements = document.querySelectorAll('.human-article');

// var cssHref = document.querySelector('.css-href');
// cssHref.href = 'css/light-style.css';



elemPolzunov.onclick = function(evt) {
  evt.preventDefault();
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('content-show');
}
  showElemPolzunov.classList.toggle('content-show');
};

elemDemidov.onclick = function(evt) {
  evt.preventDefault();
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('content-show');
}
  showElemDemidov.classList.toggle('content-show');
};
elemLisavenko.onclick = function(evt) {
  evt.preventDefault();
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('content-show');
}
  showElemLisavenko.classList.toggle('content-show');
};
elemGebler.onclick = function(evt) {
  evt.preventDefault();
  for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('content-show');
}
  showElemGebler.classList.toggle('content-show');
};


//закрытие меню
var closeMenu = document.querySelector('.nav__item-close');
var nav = document.querySelector('.nav');

closeMenu.addEventListener('click', isClose);

function isClose(){
  nav.classList.toggle('is-close');
};




var mainBG = document.querySelector('.main__background');
var mainTitle = document.querySelector('.main__title');

window.onscroll = function () {
  mainBG.style.filter = "blur(5px)";
  mainTitle.style.opacity = "1";
}
