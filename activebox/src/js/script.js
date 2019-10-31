window.addEventListener('DOMContentLoaded', function(){
    'use strict';
new WOW().init();

var map = $('.map');
var mapTop = map.offset().top;
$(window).bind('scroll load', function(){
var windowTop = $(this).scrollTop();
 if(windowTop > mapTop) {
$('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af879d136aeba89e9b2553007c133a4b23705f1c974b35d348d2d414fac1d0325&amp;width=100%&amp;height=555&amp;lang=ru_RU&amp;scroll=false"></script></script>')
$(window).unbind('scroll');
}
});

    /* FIXED HEADER */

let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

let nav = $("#nav");
let navToggle = $("#navToggle");

$(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if(scrollPos > introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
});



header.addClass("fixed");


/* SMOOTH MENU */

$("[data-scroll]").on("click", function(e){
    e.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementOffset - 60
    }, 1300);
});


/* BURGER */

navToggle.on("click", function(e){
    e.preventDefault();

    nav.toggleClass("show")
});

/* REVIEWS */

let slider = $("#reviewsSlider");

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true
  });


  /* MODAL */

  let modalCall = $("[data-modal]");
  let modalClose = $("[data-close]");

  modalCall.on("click", function(e){
    e.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function(){
        $(modalId).find('.modal__dialog').css({
            transform: "rotateX(0)"
        });
    }, 200);

    
  });

  modalClose.on("click", function(e){
    e.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
        });
        
    

    

  $(".modal").on("click", function(e){
      let $this = $(this);
      $this.find('.modal__dialog').css({
        transform: "rotateX(90deg)"
    });

    setTimeout(function(){
        $this.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 200);
    
    
  });

  $(".modal__dialog").on("click", function(e){
    e.stopPropagation();
  });

  

});