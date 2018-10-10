var elemPolzunov = document.querySelector('#people-polzunov');
var showElemPolzunov = document.querySelector('#polzunov');

var elemDemidov = document.querySelector('#people-demidov');
var showElemDemidov = document.querySelector('#demidov');

var elemLisavenko = document.querySelector('#people-lisavenko');
var showElemLisavenko = document.querySelector('#lisavenko');

var elemGebler = document.querySelector('#people-gebler');
var showElemGebler = document.querySelector('#gebler');




elemPolzunov.onclick = function(evt) {
  evt.preventDefault();
  showElemPolzunov.classList.toggle('content-show');
};

elemDemidov.onclick = function(evt) {
  evt.preventDefault();
  showElemDemidov.classList.toggle('content-show');
};

elemLisavenko.onclick = function(evt) {
  evt.preventDefault();
  showElemLisavenko.classList.toggle('content-show');
};

elemGebler.onclick = function(evt) {
  evt.preventDefault();
  showElemGebler.classList.toggle('content-show');
};