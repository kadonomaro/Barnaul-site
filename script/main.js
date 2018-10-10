var elemPolzunov = document.querySelector('#people-polzunov');
var showElemPolzunov = document.querySelector('#polzunov');

var elemDemidov = document.querySelector('#people-demidov');
var showElemDemidov = document.querySelector('#demidov');

var elemLisavenko = document.querySelector('#people-lisavenko');
var showElemLisavenko = document.querySelector('#lisavenko');

var elemGebler = document.querySelector('#people-gebler');
var showElemGebler = document.querySelector('#gebler');

var elements = document.querySelectorAll('.human-article');



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

