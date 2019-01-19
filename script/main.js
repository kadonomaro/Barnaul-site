//смена статей об известных людях
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


var mainBG = document.querySelector('.main__background');
var mainTitle = document.querySelector('.main__title');

window.onscroll = function () {
  mainBG.style.filter = "blur(5px)";
  mainTitle.style.opacity = "1";
}
