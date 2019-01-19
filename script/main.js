//смена статей об известных людях

document.addEventListener("DOMContentLoaded", function () {
  
  var thumbs = document.querySelectorAll('.human-card__link');
  var articles = document.querySelectorAll('.human-article');

  for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].addEventListener('click', function (evt) {
          evt.preventDefault();
          articles.forEach(article => {
              article.classList.remove('content-show');
          });
          articles[i].classList.add('content-show');
      });
  }

  //закрытие меню
  var closeMenu = document.querySelector('.nav__item-close');
  var nav = document.querySelector('.nav');

  closeMenu.addEventListener('click', isClose);

  function isClose(){
    nav.classList.toggle('is-close');
  };
  //размытие главного экрана и появление заголовка
  var mainBG = document.querySelector('.main__background');
  var mainTitle = document.querySelector('.main__title');
  var historyPhoto = document.querySelectorAll('.history__photo');
  
  //добавление эффектов про скролле
  window.addEventListener('scroll', function () {
    mainBG.style.filter = "blur(5px)";
    mainTitle.style.opacity = "1";
    if (window.pageYOffset >= (historyPhoto[0].offsetTop - 500)) {
      historyPhoto.forEach(photo => {
        photo.classList.remove('history__photo_fade-left');
        photo.classList.remove('history__photo_fade-right');
      });
    }
  })
});
