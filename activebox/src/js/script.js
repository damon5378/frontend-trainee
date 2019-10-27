window.addEventListener('DOMContentLoaded', function(){
    'use strict';
new WOW().init();

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