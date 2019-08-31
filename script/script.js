window.addEventListener('DOMContentLoaded', function(){
    'use strict';
new WOW().init();
// const ourOffer = document.querySelector('.offer__image');

//     let ourOfferFunction = (target) => {
//       let defaultSrc = target.src;
//       console.log('переменная с исходным src: ' + defaultSrc);
//       target.src = target.dataset.img;
//       console.log('новое значение src: ' + target.src);
//       target.dataset.img = defaultSrc;
//       console.log('новое значение data: ' + target.dataset.img);
//     };

//     ourOffer.addEventListener('mouseover', (event) => {
//       let target = event.target;

//       if(target.matches('.sony')){
//         ourOfferFunction(target);
//       }
//     });
//     ourOffer.addEventListener('mouseout', (event) => {
//       let target = event.target;

//       if(target.matches('.sony')){
//         ourOfferFunction(target);
//       }
//     });

    //Hamburger menu
    $('.ham__menu').on('click', function(e){
      e.PreventDefault;
      $(this).toggleClass('ham__active');
    });

    $('.ham__menu').on('click', function(event){
        event.preventDefault;
        $(this).toggleClass('ham_active');
        $('.menu-nav').toggleClass('menu-nav_active')
      });



    const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
              for(let i = 0; i < tabContent.length; i++){
                if(index === i) {
                  tab[i].classList.add('active');
                  tabContent[i].classList.remove('d-none');
                } else {
                  tab[i].classList.remove('active');
                  tabContent[i].classList.add('d-none');
                }
              }
            };

            tabHeader.addEventListener('click', (event) => {
              let target = event.target;
                  target = target.closest('.service-header-tab');
              if(target){
                tab.forEach((item, i) => {
                  if(item === target){
                    toggleTabContent(i);
                  }
                });
              }
            });
    };
    tabs();

    //Anchor
      $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
      

      //UpButton

  var top_show = 3000; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 2000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#back-top').fadeIn();
      else $('#back-top').fadeOut();
    });
    $('#back-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

    //Timer
    // function countTimer(deadline){
    //     let timerDays = document.querySelector('#timer-days'),
    //         timerHours = document.querySelector('#timer-hours'),
    //         timerMinutes = document.querySelector('#timer-minutes'),
    //         timerSeconds = document.querySelector('#timer-seconds');


    //     function getTimeRemaining(){
    //         let dateStop = new Date(deadline).getTime(),
    //             dateNow = new Date().getTime(),
    //             timeRemaining = (dateStop - dateNow) / 1000,
    //             seconds = Math.floor(timeRemaining % 60),
    //             minutes = Math.floor((timeRemaining / 60) % 60),
    //             hours = Math.floor(timeRemaining / 60 / 60) % 24,
    //             days = Math.floor(timeRemaining / 60 / 60 / 24);
    //             days = (days < 10) ? "0" + days : days;
    //             hours = (hours < 10) ? "0" + hours : hours;
    //             minutes = (minutes < 10) ? "0" + minutes : minutes;
    //             seconds = (seconds < 10) ? "0" + seconds : seconds;
    //                 return {timeRemaining, days, hours, minutes, seconds};
    //             }

    //     function updateClock(){
    //         let timer = getTimeRemaining();
            
    //         timerDays.textContent = timer.days;
    //         timerHours.textContent = timer.hours;
    //         timerMinutes.textContent = timer.minutes;
    //         timerSeconds.textContent = timer.seconds;
    //         if(timer.timeRemaining > 0) {
    //             setInterval(updateClock, 1000);
    //         } else {
    //             clearInterval(updateClock);
    //             timerDays.textContent = '00';
    //             timerHours.textContent = '00';
    //             timerMinutes.textContent = '00';
    //             timerSeconds.textContent = '00';
    //         }
            
    //     }
        
    //     updateClock();
    // }
    
    // countTimer('24 august 2019 17:00:00');

    //Map
    var map = $('.map');
    var mapTop = map.offset().top;
    $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
     if(windowTop > mapTop) {
    $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af879d136aeba89e9b2553007c133a4b23705f1c974b35d348d2d414fac1d0325&amp;width=100%&amp;height=555&amp;lang=ru_RU&amp;scroll=false"></script></script>')
    $(window).unbind('scroll');
    }
  });


});