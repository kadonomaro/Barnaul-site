

document.addEventListener("DOMContentLoaded", function () {
  //смена статей об известных людях
  var thumbs = document.querySelectorAll('.human-card');
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
  var mainSub = document.querySelector('.main__subtitle');
  var people = document.querySelector('.people');
  var historyPhoto = document.querySelectorAll('.history__photo');

  
  //добавление эффектов про скролле
  window.addEventListener('scroll', function () {
    mainBG.style.filter = "blur(5px)";
    mainTitle.style.opacity = "1";
    mainTitle.style.transform = `translateY(${window.pageYOffset / 2}px)`;
    mainSub.style.transform = `translateY(-${window.pageYOffset / 6}px)`;
    
    if (window.pageYOffset >= (people.offsetTop - 500)) {
      for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].style.opacity = "1";
        thumbs[i].style.transition = "opacity 1s";
        thumbs[i].style.transitionDelay = `${i/2}s`;
      }
    }

    
    if (window.pageYOffset >= (historyPhoto[0].offsetTop - 500)) {
      historyPhoto.forEach(photo => {
        photo.classList.remove('history__photo_fade-left');
        photo.classList.remove('history__photo_fade-right');
      });
    }
  })
  
});
